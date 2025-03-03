import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {main} from "@style/layout.ts";

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Header />
                <main className={main()}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
