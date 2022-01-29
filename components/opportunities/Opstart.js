import { useMemo, useRef, useEffect, useState } from "react";

export default function Opstart() {
    const targetStart = useRef();

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
                observer.unobserve(targetStart.current);
            }
        }, options);

        imgObserver.observe(targetStart.current);
    }, []);

    return (
        <div className="opstart">
            <div className={`opstart__container ${targetClassname}`}>
                <div className="opstart__content__container">
                    <div className={`opstart__item1 ${targetClassname}`}>
                        <h2>Быстрый старт!</h2>
                        <h4>
                            Ваша карьера ещё никогда не начиналась так свободно
                            и эффективно
                        </h4>
                        <p>
                            Наша система прозрачна. В ней просто разобраться и
                            быстро получить свой первый доход. Вам не нужны
                            специальные знания или навыки для начала
                            сотрудничества с компанией. Понадобятся только
                            желание развиваться и расти вместе с нами. Для этого
                            мы создаем качественные и эффективные продукты, даем
                            понятные инструменты для старта и предоставляем
                            комфортные офисы для встреч.
                        </p>
                    </div>
                    <div className="opstart__item2" ref={targetStart}>
                        <h2>Высокий доход</h2>
                        <h4>
                            Ваши вознаграждения не имеют ограничений и рамок
                        </h4>
                        <p>
                            Компания очень заинтересована в финансовом росте
                            своих партнеров. Поэтому наша система поощрений
                            разнообразна и уникальна. Ставьте самые смелые и
                            амбициозные цели, достигайте их и двигайтесь к
                            новым. У нас есть все возможности для развития
                            вашего бизнеса и получения высоких доходов.
                        </p>
                    </div>
                </div>
                {/* <div className="opstart__img__container">
                    <div className="opstart__img__inner">
                        <img src="/svg/bigBill.svg" alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}
