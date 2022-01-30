import { useEffect, useRef, useMemo, useState } from "react";

export default function Abouteco() {
    const targetContainer = useRef();
    const [imgClassname, setImgClassname] = useState(null);

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-70px 100px",
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                entries.forEach((item) => {
                    item.target.classList.add("appear");
                });
                setImgClassname("abouteco__img");
                observer.unobserve(targetContainer.current.children[1]);
            }
        }, options);

        for (let i = 0; i < targetContainer.current.children.length; i++) {
            observer.observe(targetContainer.current.children[i]);
        }
    }, []);

    return (
        <div className="abouteco">
            <div className="abouteco__container">
                <div className="abouteco__headline">
                    <h2>Экологичность</h2>
                    <h4>
                        В производстве продукции мы используем только
                        натуральные составы и безопасные материалы. Именно
                        поэтому наши товары экологичны и подлежат многоразовому
                        использованию.
                    </h4>
                </div>
                <div className="abouteco__img__content__container">
                    <div className={imgClassname}></div>
                    <div
                        className="abouteco__content__container"
                        ref={targetContainer}
                    >
                        <div className="abouteco__content__item1">
                            <div>
                                <h3>Мастерство</h3>
                                <p>
                                    Мы — эксперты в своей области. Мы создаем
                                    продукцию на основе последних разработок
                                    учёных. Предоставляем идеальный сервис для
                                    клиентов, выгодные условия работы для
                                    партнеров. Мы объединяем сотни тысяч людей
                                    по всему миру одной целью: заботой о своем
                                    главном доме — планете.
                                </p>
                            </div>
                        </div>
                        <div className="abouteco__content__item2">
                            <div>
                                <h3>Синергия</h3>
                                <p>
                                    Мы сочетаем в себе инновационные технологии,
                                    высококачественную продукцию, команду
                                    профессионалов, маркетинг нового поколения и
                                    в результате даём возможность каждому
                                    реализовать свой потенциал и исполнить любую
                                    мечту.
                                </p>
                            </div>
                        </div>
                        <div className="abouteco__content__item3">
                            <div>
                                <h3>Процветание</h3>
                                <p>
                                    Мы открываем людям современный удобный
                                    формат бизнеса, вознаграждаем за
                                    плодотворное сотрудничество, а главное,
                                    помогаем отлично себя чувствовать и
                                    прекрасно выглядеть.
                                </p>
                            </div>
                        </div>
                        <div className="abouteco__content__item4">
                            <div>
                                <h3>Безграничность</h3>
                                <p>
                                    Мы хотим, чтобы каждый человек на земле мог
                                    приобрести нашу продукцию и мог сотрудничать
                                    с компанией вне зависимости от того, на
                                    каком континенте он находится. Мы
                                    выстраиваем бизнес без границ и расстояний.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
