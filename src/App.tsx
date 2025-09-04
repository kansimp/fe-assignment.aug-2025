import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoute, RouteType } from '@routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/a2" replace />} />
                    {publicRoute.map((route: RouteType, index: number) => {
                        const Page = route.component;
                        const Layout = route.layout ?? React.Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
