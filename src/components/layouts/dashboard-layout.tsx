import SideBar from '@/components/dashboard/sidebar.tsx'
import NavBar from '@/components/dashboard/navbar.tsx'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
    return (
        <div className={'h-screen overflow-hidden flex'}>
            <SideBar />
            <div className={'w-full'}>
                <NavBar />
                <div className={'p-4'}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
