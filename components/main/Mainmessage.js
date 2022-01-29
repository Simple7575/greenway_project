import React, { useRef, useMemo, useEffect, useState } from "react";

export default function Mainmessage() {
    const messageImg = useRef(null);
    const [imgClassname, setImgClassname] = useState(null);

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-150px",
        };
    }, []);

    useEffect(() => {
        const myObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                setImgClassname("main__message__img");
                observer.unobserve(messageImg.current);
            }
        }, options);
        myObserver.observe(messageImg.current);
    }, [messageImg]);

    return (
        <div className="main__message">
            <div className={imgClassname} ref={messageImg}></div>
            <div className="main__message__headline">
                <h2>Напишите Нам</h2>
            </div>
            <div className="main__message__form__wrapper">
                <form action="">
                    <div className="main__form__name">
                        <label htmlFor="name">Имя</label>
                        <input id="name" type="text" />
                    </div>
                    <div className="main__form__secondname">
                        <label htmlFor="secondname">Фамилия</label>
                        <input id="secondname" type="text" />
                    </div>
                    <div className="main__form__number">
                        <label htmlFor="number">Телефон</label>
                        <input id="number" type="tel" />
                    </div>
                    <div className="main__form__email">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" />
                    </div>
                    <div className="main__form__text">
                        <textarea
                            name="message"
                            id="usermessage"
                            cols="30"
                            rows="7"
                        ></textarea>
                    </div>
                    <div className="main__form__button">
                        <button type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
