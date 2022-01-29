import React from "react";

export default function Mainhero({ elementToScroll }) {
    function jumpToProducts() {
        const element = elementToScroll.current.childNodes[1];
        element.scrollIntoView();
    }

    return (
        <div className="mainhero">
            <div className="hero__wrapper">
                <div className="hero__img"></div>
                <div className="hero__inner__wrapper">
                    <div className="hero__content__contacts__wrapper">
                        <div className="hero__content__contacts__inner">
                            <div className="hero__contacts">
                                <div className="hero__contacts__icons">
                                    <a href="">
                                        <img
                                            src="/svg/contactsvg/Vector7.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="/svg/contactsvg/Vector5.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="/svg/contactsvg/Vector6.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="/svg/contactsvg/Vector8.svg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="/svg/contactsvg/Vector9.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="hero__contacts__number">
                                    <a href="tel:+79510873070">
                                        +7 (951) 087 30 70
                                    </a>
                                </div>
                            </div>
                            <div className="hero__content">
                                <h2>Экология жизни, пространства и человека</h2>
                                <p>
                                    Мы предлагаем каждому человеку
                                    присоединиться к заботе об экологии
                                    окружающей среды. Вместе мы сможем сделать
                                    мир вокруг нас лучше.
                                </p>
                                <button onClick={jumpToProducts}>
                                    ПРОДУКЦИЯ
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero__logo">
                        <picture>
                            <source srcSet="/G3.webp" alt="greenway big logo" />
                            <img src="/G.svg" alt="greenway big logo" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
}
