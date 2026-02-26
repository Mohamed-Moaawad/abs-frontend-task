import './Sidebar.css';
import { NavLink } from "react-router-dom"
// icons
import { BsArchive, BsHeadset } from "react-icons/bs";
import { LuLayoutDashboard, LuUsers } from "react-icons/lu"
import { CiBank } from 'react-icons/ci';
import { User, Link } from '@heroui/react';

const Sidebar = () => {
    const navItemClass = "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors";

    const activeClass = "bg-blue-100 text-blue-600";
    const inactiveClass = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

    return (
        <aside className="w-full min-h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* Logo */}
                <div className="px-6 py-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="img">
                        <img src="/images/Overlay.png" alt="logo" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold tracking-wide text-gray-800">
                            ABS.AI
                        </h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                            Enterprise Ops
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `${navItemClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        <LuLayoutDashboard />
                        Dashboard
                    </NavLink>

                    <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                        Internal Ops
                    </p>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `${navItemClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        <BsArchive />
                        Projects
                    </NavLink>

                    <NavLink
                        to="/billing"
                        className={({ isActive }) =>
                            `${navItemClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        <CiBank />
                        Billing
                    </NavLink>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${navItemClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        <LuUsers />
                        Users
                    </NavLink>

                    <NavLink
                        to="/client-support"
                        className={({ isActive }) =>
                            `${navItemClass} ${isActive ? activeClass : inactiveClass}`
                        }
                    >
                        <BsHeadset />
                        Client Support
                    </NavLink>
                </nav>
            </div>

            {/* Bottom Profile */}
            <div className="p-4">
                <User
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                    description={
                        <Link isExternal href="https://x.com/jrgarciadev" size="sm">
                            @jrgarciadev
                        </Link>
                    }
                    name="Junior Garcia"
                />
            </div>
        </aside>
    )
}

export default Sidebar