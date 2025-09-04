import { FixedSizeList as List } from 'react-window';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../Card/Card';
import { useAppSelector } from '@redux/hook';

type VirtualizedListProps = {
    listRef: React.RefObject<List | null>;
    selectedId: string | null;
    setSelectedId: (id: string) => void;
};
function VirtualizedList({ listRef, selectedId, setSelectedId }: VirtualizedListProps) {
    const filteredData = useAppSelector((state) => state.location.filteredData);
    return (
        <List height={650} itemCount={filteredData.length} itemSize={160} width="100%" ref={listRef}>
            {({ index, style }) => {
                const item = filteredData[index];
                const isSelected = item.id === selectedId;
                return (
                    <div style={style} className="px-3">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`cursor-pointer rounded-xl transition shadow-sm ${
                                isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <Card>
                                <CardContent className="p-5 h-[122px]">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                                        <span className="text-yellow-500 font-semibold">⭐ {item.rating}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                );
            }}
        </List>
    );
}

export default VirtualizedList;
