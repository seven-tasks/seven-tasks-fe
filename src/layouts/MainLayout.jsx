import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function MainLayout() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar />

            <div style={{ flex: 1, background: '#FAFAFC', minHeight: "100vh" }}>
                <Topbar />

                <div style={{ padding: '24px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}