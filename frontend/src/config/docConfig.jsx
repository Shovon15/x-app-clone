import { HiHome, HiOutlineHome, HiOutlineBell, HiMiniBell, HiMiniUsers, HiOutlineUsers, HiMiniUser, HiOutlineUser } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineMail, MdMail } from "react-icons/md";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

export const docsConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "contact",
            href: "/hire-me",
        },
    ],

    sidebarLinks: [
        {
            id: 1,
            name: 'Home',
            'path': '/',
            outlineIcon: <HiOutlineHome className="w-7 h-7" />,
            fillIcon: <HiHome className="w-7 h-7" />

        },
        {
            id: 2,
            name: 'Explore',
            path: '#',
            outlineIcon: <HiOutlineSearch className="w-7 h-7" />,
            fillIcon: <HiOutlineSearch className="w-7 h-7" />
        },
        {
            id: 3,
            name: 'Notification',
            path: '#',
            outlineIcon: <HiOutlineBell className="w-7 h-7" />,
            fillIcon: <HiMiniBell className="w-7 h-7" />
        },
        {
            id: 4,
            name: 'Messages',
            path: '#',
            outlineIcon: <MdOutlineMail className="w-7 h-7" />,
            fillIcon: <MdMail className="w-7 h-7" />
        },
        {
            id: 5,
            name: 'Book Mark',
            path: '#',
            outlineIcon: <IoBookmarkOutline className="w-7 h-7" />,
            fillIcon: <IoBookmark className="w-7 h-7" />
        },
        {
            id: 6,
            name: 'Communities',
            path: '#',
            outlineIcon: <HiOutlineUsers className="w-7 h-7" />,
            fillIcon: <HiMiniUsers className="w-7 h-7" />
        },
        {
            id: 7,
            name: 'Profile',
            path: '/profile',
            outlineIcon: <HiOutlineUser className="w-7 h-7" />,
            fillIcon: <HiMiniUser className="w-7 h-7" />
        },
        {
            id: 8,
            name: 'More',
            path: '#',
            outlineIcon: <BsThreeDots className="w-7 h-7" />,
            fillIcon: <BsThreeDots className="w-7 h-7" />
        },
    ]


}