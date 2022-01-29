import { useMemo, useRef, useEffect, useState } from "react";

export default function Opcar() {
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
                settargetClassname("opcar__img");
                observer.unobserve(target.current);
            }
        }, options);

        imgObserver.observe(target.current);
    }, []);

    return (
        <div className="opcar">
            <div className={targetClassname} ref={target}></div>
            <div className="opcar__container">
                <div className="opcar__content">
                    <h2>Автобонус</h2>
                    <h5>
                        Ни одно партнерство и качественная работа не должны
                        оставаться без внимания, это мы знаем точно. И в
                        качестве дополнительного бонуса от компании наши
                        партнеры получают новые автомобили.
                    </h5>
                    <p>
                        <strong>Mersedes-Benz</strong> — это не только символ
                        успеха, комфорта и безопасности. Это еще и приятный
                        бонус от компании, который вы можете получить, выполнив
                        условия специальной программы «Автобонус Greenway».
                        Более 100 автомобилей Mercedes-Benz в этом году ждут
                        своих счастливых обладателей в качестве бонуса от
                        компании.
                    </p>
                    <p>
                        Чем стабильнее ваш рост в бизнесе и выше статус, тем
                        лучше вы сможете получить автомобиль в качестве бонуса
                        за плодотворное
                    </p>
                </div>
            </div>
        </div>
    );
}
