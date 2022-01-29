import { useMemo, useRef, useEffect, useState } from "react";

export default function Aboutstart() {
    const target = useRef();

    const [targetClassname, settargetClassname] = useState(null);

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-100px 0px",
        };
    }, []);

    useEffect(() => {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                settargetClassname("appear");
                observer.unobserve(target.current);
            }
        }, options);

        imgObserver.observe(target.current);
    }, []);
    return (
        <div className="aboutstart">
            <div className={`aboutstart__container ${targetClassname}`}>
                <div
                    className={`aboutstart__item1 ${targetClassname}`}
                    ref={target}
                >
                    <h2>Greenway находится в начале своего пути</h2>
                    <p>
                        Всего за 5 лет существования компании мы открыли
                        представительства в 39 странах мира: России, Казахстане,
                        Киргизии, Республике Беларусь, Украине, Турции и странах
                        Евросоюза, запустили 250 региональных центров в 34
                        городах. И это только начало.
                    </p>
                    <h4>
                        Сейчас Greenway как никогда стремительно движется к
                        выходу на Мировой рынок
                    </h4>
                </div>
                <div className="aboutstart__item2">
                    <div className="aboutstart__img__container">
                        <div className="aboutstart__decoration"></div>
                        <img
                            src="/img/aboutpg/heriberto-garcia-YdjrYLvLO5Y-unsplash.jpg"
                            alt=""
                        />
                        <div className="aboutstart__list__container">
                            <ul>
                                <li>года</li>
                                <li>стран</li>
                                <li>городов</li>
                                <li>региональных центров</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
