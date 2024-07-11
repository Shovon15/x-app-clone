import { PiDotsThreeBold } from "react-icons/pi";

const Feed = () => {
    return (
        <div className="p-5 w-full">
            <div className="border border-gray-500 rounded-xl text-white p-5 space-y-2">
                <p className="font-semibold text-xl">Subscribe to Premium</p>
                <p>
                    Subscribe to unlock new features and if eligible, receive a
                    share of ads revenue.
                </p>
                <button className="bg-blue-500 rounded-full px-4 py-2">
                    Subscribe
                </button>
            </div>
            <div className="border border-gray-500 rounded-xl text-white  space-y-2 mt-5">
                <p className="font-semibold text-xl pl-5 pt-3">
                    Trends for you
                </p>

                <div className="flex justify-between hover:bg-gray-900 cursor-pointer px-5 py-2 ">
                    <div className="space-y-1 ">
                        <p className="font-thin text-gray-400 text-sm">
                            Trending in Bangladesh
                        </p>
                        <p className="font-bold">#dprem</p>
                        <p className="font-thin text-gray-400 text-sm">
                            304k posts
                        </p>
                    </div>
                    <div className="">
                        <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-gray-900 cursor-pointer px-5 py-2 ">
                    <div className="space-y-1 ">
                        <p className="font-thin text-gray-400 text-sm">
                            Trending in Bangladesh
                        </p>
                        <p className="font-bold">#dprem</p>
                        <p className="font-thin text-gray-400 text-sm">
                            304k posts
                        </p>
                    </div>
                    <div className="">
                        <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-gray-900 cursor-pointer px-5 py-2 ">
                    <div className="space-y-1 ">
                        <p className="font-thin text-gray-400 text-sm">
                            Trending in Bangladesh
                        </p>
                        <p className="font-bold">#dprem</p>
                        <p className="font-thin text-gray-400 text-sm">
                            304k posts
                        </p>
                    </div>
                    <div className="">
                        <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-gray-900 cursor-pointer px-5 py-2 ">
                    <div className="space-y-1 ">
                        <p className="font-thin text-gray-400 text-sm">
                            Trending in Bangladesh
                        </p>
                        <p className="font-bold">#dprem</p>
                        <p className="font-thin text-gray-400 text-sm">
                            304k posts
                        </p>
                    </div>
                    <div className="">
                        <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-gray-900 cursor-pointer px-5 py-2 ">
                    <div className="space-y-1 ">
                        <p className="font-thin text-gray-400 text-sm">
                            Trending in Bangladesh
                        </p>
                        <p className="font-bold">#dprem</p>
                        <p className="font-thin text-gray-400 text-sm">
                            304k posts
                        </p>
                    </div>
                    <div className="">
                        <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                    </div>
                </div>

                <div className="text-blue-500 hover:bg-gray-900 px-10 py-2 rounded-b-xl font-semibold cursor-pointer">
                    show more
                </div>
            </div>
        </div>
    );
};

export default Feed;
