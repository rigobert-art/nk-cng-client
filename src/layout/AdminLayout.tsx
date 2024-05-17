import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

import { useAppContext } from '../context/AppProvider';


export const AdminLayout: React.FC = () => {
    const { isSidebarExpanded } = useAppContext();

    return (
        <div className="flex h-screen">
            <Sidebar />

            <section className={`py-16 flex-1 ${isSidebarExpanded ? "px-40" : "px-24"}`}>
                <Outlet />
            </section>
        </div>

    );
};


export default AdminLayout;