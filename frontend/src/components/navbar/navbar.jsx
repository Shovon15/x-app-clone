import { useState } from "react"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="h-14 bg-black opacity-80 w-full sticky top-0 inset-0 text-white flex justify-between border-b border-r border-gray-500">
            <div
                className="w-1/2 flex justify-center items-center cursor-pointer relative font-semibold hover:bg-gray-700"
                onClick={() => handleTabClick('1')}
            >
                For you
                {activeTab === '1' && (
                    <span className="bg-blue-400 h-1 w-16 rounded-full absolute bottom-0
                     left-1/2 transform -translate-x-1/2"></span>
                )}
            </div>
            <div
                className="w-1/2 flex justify-center items-center cursor-pointer relative hover:bg-gray-700"
                onClick={() => handleTabClick('2')}
            >
                Following
                {activeTab === '2' && (
                    <span className="bg-blue-400 h-1 w-16 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></span>
                )}
            </div>
        </div>
    )
}

export default Navbar