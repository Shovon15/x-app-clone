import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="sticky top-0 inset-0 text-white flex px-5 py-2 bg-black">
            <div className="realtive w-full">
                <HiOutlineSearch
                    className={`w-5 h-5 absolute left-8 top-5
                     ${isFocused ? 'text-blue-500' : 'text-white'}`} />
                <input
                    placeholder="Search"
                    className="w-full p-2 pl-10 bg-[#202327] focus:bg-transparent rounded-full
                 focus:outline-none focus:ring-2 active:ring-2 ring-blue-500 text-white"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    )
}

export default SearchBar