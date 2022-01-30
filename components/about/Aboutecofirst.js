import { useMemo, useRef, useEffect, useState } from "react";

export default function Aboutecofirst() {
    const target = useRef();

    const [targetClassname, settargetClassname] = useState(null);
    const [imgClassname, setImgClassname] = useState(null);

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-150px 0px",
        };
    }, []);

    useEffect(() => {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                settargetClassname("appear");
                setImgClassname("aboutecofirst__img");
                observer.unobserve(target.current);
            }
        }, options);

        imgObserver.observe(target.current);
    }, []);
    return (
        <div className="aboutecofirst">
            <div className={imgClassname} ref={target}></div>
            <div className="aboutecofirst__container">
                <div className={`aboutecofirst__content ${targetClassname}`}>
                    <h3>Мы способствуем оздоровлению людей по всему миру</h3>
                    <p>
                        Мы стараемся заботиться о здоровье людей по всему миру и
                        осуществлять максимальный вклад в улучшение глобального
                        состояния планеты, создавая высококачественные
                        экопродукты.
                    </p>
                    <p>
                        Идея компании — создавать широкий ассортимент
                        экологичных товаров и представлять его в разных странах
                        с помощью партнеров, давая им возможность сделать жизнь
                        каждого человека лучше.
                    </p>
                </div>
            </div>
        </div>
    );
}
