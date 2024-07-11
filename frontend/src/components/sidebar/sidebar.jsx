import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { docsConfig } from "../../config/docConfig";
import { PiDotsThreeBold } from "react-icons/pi";

const Sidebar = () => {
    const [hoveredId, setHoveredId] = useState(null);
    return (
        <div className="w-[280px] h-auto bg-black sticky top-0 inset-0 pl-10 py-3 overflow-y-scroll">
            <div className="w-10 h-10 ml-2">
                <a href="/">
                    <img src={logo} alt="logo" className="rounded-full " />
                </a>
            </div>
            <div className="py-3">
                {docsConfig.sidebarLinks.map((sidebarLink, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredId(sidebarLink.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="py-1"
                    >
                        <button className="rounded-full py-2 px-4 text-lg text-white delay-75 hover:bg-slate-700 flex gap-3 items-center">
                            <span>
                                {hoveredId === sidebarLink.id
                                    ? sidebarLink.fillIcon
                                    : sidebarLink.outlineIcon}
                            </span>
                            <span className="pr-2">{sidebarLink.name}</span>
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <button className="py-2 px-4 rounded-full w-44 bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    POST
                </button>
            </div>
            <div className="pr-5 py-5 ">
                <div className="flex items-center gap-2 justify-between rounded-full px-3 py-2 hover:bg-gray-600">
                    <div className="flex gap-5 ">
                        <img
                            src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png"
                            alt="user"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-white font-semibold">John Doe</p>
                            <p className="text-white">@JohnDoe</p>
                        </div>
                    </div>
                    <PiDotsThreeBold className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
