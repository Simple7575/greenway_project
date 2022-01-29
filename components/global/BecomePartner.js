import React from "react";

export default function BecomePartner({ openPartner, setOpenPartner }) {
    function closePopup() {
        setOpenPartner(null);
    }

    return (
        <div className={`become__partner ${openPartner}`}>
            <div className="become__partner__container">
                <div className="become__partner__close" onClick={closePopup}>
                    <svg
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 0.875C9.88633 0.875 0.875 9.88633 0.875 21C0.875 32.1137 9.88633 41.125 21 41.125C32.1137 41.125 41.125 32.1137 41.125 21C41.125 9.88633 32.1137 0.875 21 0.875ZM21 37.7109C11.773 37.7109 4.28906 30.227 4.28906 21C4.28906 11.773 11.773 4.28906 21 4.28906C30.227 4.28906 37.7109 11.773 37.7109 21C37.7109 30.227 30.227 37.7109 21 37.7109Z"
                            fill="#666666"
                        />
                        <path
                            d="M21 4.28906C11.773 4.28906 4.28906 11.773 4.28906 21C4.28906 30.227 11.773 37.7109 21 37.7109C30.227 37.7109 37.7109 30.227 37.7109 21C37.7109 11.773 30.227 4.28906 21 4.28906ZM28.7176 27.9674C28.7715 28.0348 28.8029 28.1156 28.8029 28.201C28.8029 28.4031 28.6412 28.5604 28.4436 28.5604L25.4787 28.5469L21.018 23.2281L16.5572 28.5514L13.5879 28.5648C13.3902 28.5648 13.2285 28.4031 13.2285 28.2055C13.2285 28.1201 13.26 28.0393 13.3139 27.9719L19.1582 21.0135L13.3139 14.0506C13.2596 13.9847 13.2295 13.9023 13.2285 13.817C13.2285 13.6148 13.3902 13.4576 13.5879 13.4576L16.5572 13.4711L21.018 18.7898L25.4832 13.4666L28.448 13.4531C28.6457 13.4531 28.8074 13.6148 28.8074 13.8125C28.8074 13.8979 28.7805 13.9832 28.7266 14.0461L22.8822 21.009L28.7176 27.9674V27.9674Z"
                            fill="black"
                            fillOpacity="0.1"
                        />
                        <path
                            d="M28.8074 13.8125C28.8074 13.6148 28.6457 13.4531 28.448 13.4531L25.4832 13.4666L21.018 18.7898L16.5572 13.4711L13.5879 13.4576C13.3902 13.4576 13.2285 13.6148 13.2285 13.817C13.2285 13.9023 13.26 13.9832 13.3139 14.0506L19.1582 21.0135L13.3139 27.9719C13.2596 28.0377 13.2295 28.1201 13.2285 28.2055C13.2285 28.4031 13.3902 28.5648 13.5879 28.5648L16.5572 28.5514L21.018 23.2281L25.4787 28.5469L28.4436 28.5603C28.6412 28.5603 28.8029 28.4031 28.8029 28.201C28.8029 28.1156 28.7715 28.0348 28.7176 27.9674L22.8822 21.009L28.7266 14.0461C28.7805 13.9832 28.8074 13.8979 28.8074 13.8125V13.8125Z"
                            fill="#666666"
                        />
                    </svg>
                </div>
                <div className="become__partner__headline">
                    <h2>
                        Добро пожаловать в <strong>Greenway</strong>
                    </h2>
                </div>
                <div className="become__partner__inner">
                    <div className="become__partner__content">
                        <h3>
                            Экологическую компанию № 1 в сфере сетевого бизнеса!
                        </h3>
                        <p>
                            Для того, чтобы зарегистрироваться, вам необходим
                            наставник, который будет помогать вам на протяжении
                            всего пути к построению успешного и стабильного
                            бизнеса, расскажет о компании, возможностях и
                            продукции.
                        </p>
                        <p>
                            К счастью для этого вам не надо ничего искать,
                            переходит по различным ссылкам и непонятным сайтам.
                            Просто оставьте свою заявку здесь со своими данными
                            и мы скоро свяжемся с вами.
                        </p>
                    </div>
                    <div className="become__partner__form__container">
                        <form action="">
                            <div className="become__partner__form__name">
                                <label htmlFor="name">Имя</label>
                                <input id="name" type="text" />
                            </div>
                            <div className="become__partner__form__secondname">
                                <label htmlFor="secondname">Фамилия</label>
                                <input id="secondname" type="text" />
                            </div>
                            <div className="become__partner__form__number">
                                <label htmlFor="number">Телефон</label>
                                <input id="number" type="tel" />
                            </div>
                            <div className="become__partner__form__email">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" />
                            </div>
                            <div className="become__partner__form__button">
                                <button type="submit">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
