import React from "react";
import Link from "next/link";

export default function Footer() {
    const url = "https://new.mygreenway.com/shop?gw=drGWhF1lHb#";

    function redirectTo() {
        window.open(url, "_blank");
    }

    return (
        <div className="footer">
            <div className="footer__partner">
                <p>
                    Сайт партнер компании <strong>Greenway</strong>
                </p>
                <p>
                    Владелец <strong>Конорева Елена Васильевна</strong>
                </p>
                <strong>ID 9346525</strong>
            </div>
            <div className="footer__contacts">
                <strong>ОБРАТНАЯ СВЯЗЬ</strong>
                <div className="footer__contacts__icons">
                    <a href="">
                        <img src="/svg/contactsvg/Vector7.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/contactsvg/Vector5.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/contactsvg/Vector6.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/contactsvg/Vector8.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/contactsvg/Vector9.svg" alt="" />
                    </a>
                </div>
                <div className="footer__contacts__number">
                    <a href="tel:+79510873070">+7 (951) 087 30 70</a>
                </div>
            </div>
            <div className="footer__nav">
                <ul className="mobile__nav__pages">
                    <li>
                        <Link href="/opportunities">Возможности</Link>
                    </li>
                    <li>
                        <Link href="/about">О Компании</Link>
                    </li>
                    <li>
                        <button onClick={redirectTo}>Интернет-магазин</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
