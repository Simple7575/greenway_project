import { useMemo, useRef, useEffect, useState } from "react";

export default function Optravel() {
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
                settargetClassname("optravel__img");
                observer.unobserve(target.current);
            }
        }, options);

        imgObserver.observe(target.current);
    }, []);
    return (
        <div className="optravel">
            <div className={targetClassname} ref={target}></div>
            <div className="optravel__container">
                <div className="optravel__content">
                    <h3>Путешествия</h3>
                    <h5>
                        В награду за эффективную и плодотворную работу Greenway
                        дает возможность бесплатно увидеть самые потрясающие
                        места нашей планеты и расширить свои границы
                    </h5>
                    <p>
                        Путешествия Greenway — то, что запомнится на всю жизнь и
                        даст мощный толчок в развитии бизнеса, ведь это лучшая
                        благодарность от компании за ваши достижения. Если вы
                        мечтаете больше путешествовать, видеть новое и
                        вдохновляться этим, то вы на правильном пути.
                    </p>
                </div>
                <div className="optravel__headline">
                    <h2>
                        Бонусы от <strong>Greenway</strong>
                    </h2>
                </div>
            </div>
        </div>
    );
}
