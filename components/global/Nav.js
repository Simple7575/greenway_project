import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Nav({ setOpenPartner }) {
    const url = "https://new.mygreenway.com/shop?gw=drGWhF1lHb#";

    const [navOpen, setNavOpen] = useState(null);
    const mobileNav = useRef();

    function openPopup() {
        setOpenPartner("open");
    }

    function redirectTo() {
        window.open(url, "_blank");
    }

    function openNav() {
        setNavOpen("open");
    }

    function closeNav() {
        setNavOpen(null);
    }

    useEffect(() => {
        const onMouseDown = (e) => {
            if (!mobileNav.current.contains(e.target)) {
                closeNav();
            }
        };

        document.addEventListener("mouseout", onMouseDown);

        return () => {
            document.removeEventListener("mouseout", onMouseDown);
        };
    }, []);

    return (
        <>
            <nav id="nav">
                <div className="logo" onClick={closeNav}>
                    <Link href="/">Greenway</Link>
                </div>
                <div>
                    <ul className="nav__pages">
                        <li>
                            <Link href="/opportunities">Возможности</Link>
                        </li>
                        <li>
                            <Link href="/about">О Компании</Link>
                        </li>
                        <li>
                            <button onClick={redirectTo}>
                                Интернет-магазин
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="become__partner__wrapper">
                    <button onClick={openPopup}>
                        Стать Партнером <img src="/svg/arrow.svg" alt="arrow" />
                    </button>
                </div>
                <div className="hamburger__wrapper" onClick={openNav}>
                    <img src="/svg/humburger.svg" alt="hamburger icon" />
                </div>
                <div ref={mobileNav} className={`mobile__nav ${navOpen}`}>
                    <div className="mobile__nav__close">
                        <svg
                            onClick={closeNav}
                            width="46"
                            height="46"
                            viewBox="0 0 46 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23 2.875C11.8863 2.875 2.875 11.8863 2.875 23C2.875 34.1137 11.8863 43.125 23 43.125C34.1137 43.125 43.125 34.1137 43.125 23C43.125 11.8863 34.1137 2.875 23 2.875ZM23 39.7109C13.773 39.7109 6.28906 32.227 6.28906 23C6.28906 13.773 13.773 6.28906 23 6.28906C32.227 6.28906 39.7109 13.773 39.7109 23C39.7109 32.227 32.227 39.7109 23 39.7109Z"
                                fill="black"
                                fillOpacity="0.8"
                            />
                            <path
                                d="M23 6.28906C13.773 6.28906 6.28906 13.773 6.28906 23C6.28906 32.227 13.773 39.7109 23 39.7109C32.227 39.7109 39.7109 32.227 39.7109 23C39.7109 13.773 32.227 6.28906 23 6.28906ZM30.7176 29.9674C30.7715 30.0348 30.8029 30.1156 30.8029 30.201C30.8029 30.4031 30.6412 30.5604 30.4436 30.5604L27.4787 30.5469L23.018 25.2281L18.5572 30.5514L15.5879 30.5648C15.3902 30.5648 15.2285 30.4031 15.2285 30.2055C15.2285 30.1201 15.26 30.0393 15.3139 29.9719L21.1582 23.0135L15.3139 16.0506C15.2596 15.9847 15.2295 15.9023 15.2285 15.817C15.2285 15.6148 15.3902 15.4576 15.5879 15.4576L18.5572 15.4711L23.018 20.7898L27.4832 15.4666L30.448 15.4531C30.6457 15.4531 30.8074 15.6148 30.8074 15.8125C30.8074 15.8979 30.7805 15.9832 30.7266 16.0461L24.8822 23.009L30.7176 29.9674V29.9674Z"
                                fill="black"
                                fillOpacity="0.1"
                            />
                            <path
                                d="M30.8074 15.8125C30.8074 15.6148 30.6457 15.4531 30.448 15.4531L27.4832 15.4666L23.018 20.7898L18.5572 15.4711L15.5879 15.4576C15.3902 15.4576 15.2285 15.6148 15.2285 15.817C15.2285 15.9023 15.26 15.9832 15.3139 16.0506L21.1582 23.0135L15.3139 29.9719C15.2596 30.0377 15.2295 30.1201 15.2285 30.2055C15.2285 30.4031 15.3902 30.5648 15.5879 30.5648L18.5572 30.5514L23.018 25.2281L27.4787 30.5469L30.4436 30.5603C30.6412 30.5603 30.8029 30.4031 30.8029 30.201C30.8029 30.1156 30.7715 30.0348 30.7176 29.9674L24.8822 23.009L30.7266 16.0461C30.7805 15.9832 30.8074 15.8979 30.8074 15.8125V15.8125Z"
                                fill="black"
                                fillOpacity="0.8"
                            />
                        </svg>
                    </div>
                    <div>
                        <ul className="mobile__nav__pages">
                            <li onClick={closeNav} className={navOpen}>
                                <Link href="/opportunities">Возможности</Link>
                            </li>
                            <li onClick={closeNav} className={navOpen}>
                                <Link href="/about">О Компании</Link>
                            </li>
                            <li className={navOpen}>
                                <button onClick={redirectTo}>
                                    Интернет-магазин
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile__become__partner__wrapper">
                        <button onClick={openPopup}>
                            Стать Партнером
                            <img src="/svg/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
