import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar/sidebar"
import Navbar from "../components/navbar/navbar"
import Feed from "../components/feed/feed"
import SearchBar from "../components/searchBar/searchBar"

const MainLayout = () => {
    return (
        <div className="flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="bg-black w-full flex">
                <div className="w-full md:w-[600px]">
                    <Navbar />
                    <Outlet />
                </div>
                <div className="flex-1">
                    <SearchBar />
                    <Feed />
                </div>
            </div>
        </div>
    )
}

export default MainLayout