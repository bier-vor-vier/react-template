import {Link, useLocation} from "react-router-dom";
import {BarChart2, Home, Menu, Settings, Tent} from "lucide-react";
import {useIsAuthenticated} from "@store/appSelectors.ts";
import {link, sidebar} from "@style/layout.ts";
import {selectIsCollapsed, toggleSidebar} from "@store/appSlice.ts";
import {useDispatch, useSelector} from "react-redux";

const Sidebar = () => {

    const collapsed = useSelector(selectIsCollapsed);
    const dispatch = useDispatch();

    return (
        <aside className={sidebar({collapsed})}>
            {/* Toggle Button */}
            <button
                onClick={() => dispatch(toggleSidebar())}
                className="flext px-3 items-center mb-6 p-2 rounded"
            >
                <Menu size={24}/>
            </button>

            {/* Navigation */}
            <nav className="flex-grow space-y-2">
                <SidebarItem to="/" icon={<Home size={24}/>} label="Home" isCollapsed={collapsed}/>
                <SidebarItemAuthenticated to="/dashboard" icon={<BarChart2 size={24}/>} label="Dashboard"
                                          isCollapsed={collapsed}/>
                <SidebarItem to="/about" icon={<Tent size={24}/>} label="About" isCollapsed={collapsed}/>
            </nav>

            {/* Unten angehefteter Bereich */}
            <div className="mt-auto">
                <SidebarItemAuthenticated to="/settings" icon={<Settings size={24}/>} label="Settings"
                                          isCollapsed={collapsed}/>
            </div>
        </aside>
    );
};

interface SidebarItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    isCollapsed: boolean;
    pathname?: string;
}

// Extract common rendering logic into a helper function
const renderLink = ({to, icon, label, isCollapsed, pathname}: SidebarItemProps) => (
    <Link to={to} className={link({active: pathname === to})}>
        {icon}
        {!isCollapsed && <span className="ml-2">{label}</span>}
    </Link>
);

const SidebarItem = (props: SidebarItemProps) => {
    const location = useLocation();
    return renderLink({...props, pathname: location.pathname});
};

const SidebarItemAuthenticated = (props: SidebarItemProps) => {
    const isAuthenticated = useIsAuthenticated();
    const location = useLocation();

    if (!isAuthenticated) return null; // Inline condition for early return
    return renderLink({...props, pathname: location.pathname});
};

export default Sidebar;
