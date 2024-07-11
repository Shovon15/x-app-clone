import { PiDotsThreeBold } from "react-icons/pi"

const Post = () => {
    return (
        <div className="h-auto w-full text-white p-5 ">
            <div className="flex">
                <div className="flex gap-2 items-center w-full">
                    <img
                        src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png"
                        alt="user"
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="font-semibold text-xl">John Doe</p>
                    <p className=" text-sm">@JohnDoe</p>
                    <p className=" text-sm">. 3h</p>

                </div>
                <div className="">
                    <PiDotsThreeBold className="w-8 h-8 p-1 text-white hover:bg-[#3a515f] hover:text-blue-500 rounded-full" />
                </div>
            </div>
            <div className="pl-12">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ipsum quas iusto debitis nihil maxime commodi possimus modi nemo laboriosam enim voluptate minus ipsam eos harum illum doloremque, laudantium porro qui mollitia at. Consequatur placeat, suscipit ipsum saepe, perferendis nulla corporis, labore cum pariatur illo deserunt mollitia cumque maxime fuga minima. Excepturi eveniet ullam, amet dolore atque error soluta fugit voluptatibus, sint magni dolorem voluptatem libero molestiae voluptates, aliquid recusandae deleniti eligendi itaque numquam reprehenderit temporibus officiis a blanditiis molestias? Porro est aliquid repudiandae ipsam nobis quae molestias quam alias sit id temporibus delectus, nisi vitae explicabo dolorum voluptas? Inventore?</p>
            </div>

        </div>
    )
}

export default Post