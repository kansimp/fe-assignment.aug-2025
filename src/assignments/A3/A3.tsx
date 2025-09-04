import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FixedSizeList as List } from 'react-window';
import { Button } from './components/Button/Button';
import redMarker from './assets/icons/map-marker-icon.png';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { getFilteredData } from '@redux/slices/A3/locationSlice';
import VirtualizedList from './components/VirtualizedList/VirtualizedList';

// Default icon (xanh)
const defaultIcon = new L.Icon({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
});

// Selected icon (đỏ)
const selectedIcon = new L.Icon({
    iconRetinaUrl: redMarker,
    iconUrl: redMarker,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [40, 41],
});

const CenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
    const map = useMap();
    map.flyTo([lat, lng], 13, { duration: 1 });
    return null;
};

const A3: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const dispatch = useAppDispatch();
    const filteredData = useAppSelector((state) => state.location.filteredData);
    const listRef = useRef<List>(null);

    useEffect(() => {
        dispatch(getFilteredData({ search, sortOrder }));
    }, [search, sortOrder]);

    const handleMarkerClick = useCallback(
        (id: string, index: number) => {
            setSelectedId(id);
            listRef.current?.scrollToItem(index, 'center');
        },
        [listRef],
    );

    const selectedLocation = filteredData.find((loc) => loc.id === selectedId);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[92vh] p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border bg-white">
                <MapContainer center={[16.0471, 108.206]} zoom={6} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {filteredData.map((item, idx) => (
                        <Marker
                            key={item.id}
                            position={[item.location.lat, item.location.lng]}
                            icon={item.id === selectedId ? selectedIcon : defaultIcon}
                            eventHandlers={{
                                click: () => handleMarkerClick(item.id, idx),
                            }}
                        >
                            <Popup>
                                <div className="font-semibold text-base text-gray-800">{item.name}</div>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="text-yellow-500 font-medium mt-1">⭐ {item.rating}</p>
                            </Popup>
                        </Marker>
                    ))}
                    {selectedLocation && (
                        <CenterMap lat={selectedLocation.location.lat} lng={selectedLocation.location.lng} />
                    )}
                </MapContainer>
            </div>

            {/* List */}
            <div className="flex flex-col rounded-2xl shadow-lg border bg-white overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
                    <input
                        type="text"
                        placeholder="🔍 Search..."
                        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        variant="outline"
                        className="px-3 py-2 rounded-lg text-sm hover:bg-gray-100"
                        onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
                    >
                        {sortOrder === 'asc' ? '↑ Rating' : '↓ Rating'}
                    </Button>
                </div>

                <VirtualizedList listRef={listRef} selectedId={selectedId} setSelectedId={setSelectedId} />
            </div>
        </div>
    );
};

export default A3;
