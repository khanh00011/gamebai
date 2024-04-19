import React, { useState } from "react";
import { Button } from "../../ui/button";
// import logo from "../../public/logo192.png";

const Header = () => {
    const [menu, setMenu] = useState(
        [
            { text: "Trang Chủ", link: "#" },
            { text: "Hướng Dẫn", link: "#" },
            { text: "kinh nghiệm", link: "#" },
            { text: "Trò chơi", link: "#" },
            { text: "khuyến mãi", link: "#" },
            { text: "liên hệ", link: "#" }
        ]
    )
    return (
        <div className="header flex items-center justify-around text-white">
            <div className="logo max-w-32">
                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" />
            </div>
            <nav className="menu-header">
                <ul className="flex">
                    {
                        menu.map((item, index) => {
                            return (
                                <li className="pr-10 uppercase" key={index}>
                                    <a className="hover:text-yellow" href={item.link}>{item.text}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className=" text-xs">
                <Button className="border-solid border-white rounded-xl " >
                    Tải Ngay
                </Button>
                <Button className="bg-yellow rounded-xl py-2 px-6 ml-9 text-black">
                    Chơi Ngay
                </Button>

            </div>
        </div>
    )
}
export default Header;