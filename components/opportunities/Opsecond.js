import { useEffect, useRef, useMemo } from "react";

export default function Opsecond() {
    const targetContainer = useRef();

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-100px 0px",
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                entries.forEach((item) => {
                    item.target.classList.add("appear");
                });
                observer.unobserve(targetContainer.current.children[1]);
            }
        }, options);

        for (let i = 0; i < targetContainer.current.children.length; i++) {
            observer.observe(targetContainer.current.children[i]);
        }
    }, []);

    return (
        <div className="opsecond">
            <div className="opsecond__container" ref={targetContainer}>
                <div className="opsecond__content__item1">
                    <h2>Поддержка</h2>
                    <h5>
                        С первого дня у вас будет опытный наставник, который
                        проведет обучение и поможет на пути к результату
                    </h5>
                    <p>
                        Наставник по-настоящему заинтересован в том, чтобы ваше
                        сотрудничество с компанией было комфортным и
                        эффективным. Он будет помогать вам на протяжении всего
                        пути к построению успешного и стабильного бизнеса.
                    </p>
                    <p>
                        Партнеры Greenway — это открытые и позитивные люди. Их
                        мечты и цели совершенно разные, но они объединены одной
                        целью. Став одним из них, вы сможете посещать заряжающие
                        и яркие события, полезные мероприятия по обмену опытом и
                        стать частью большой и дружной семьи.
                    </p>
                </div>
                <div className="opsecond__content__img1">
                    <img
                        loading="lazy"
                        src="/img/opportunitiespg/markus-spiske-ls2rTqdQcoA-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="opsecond__content__item2">
                    <h2>Команда</h2>
                    <h5>
                        Стройте свою уникальную команду и объединяйте людей с
                        общими целями
                    </h5>
                    <p>
                        Совместное развитие и поддержка единомышленников будут
                        способствовать быстрому развитию вашего бизнеса и
                        увеличению дохода. Вы выбираете с кем работать и по
                        какому пути идти.
                    </p>
                </div>
                <div className="opsecond__content__img2">
                    <img
                        loading="lazy"
                        src="/img/opportunitiespg/sourabh-barua-v9W_TCvokhM-unsplash.jpg"
                        alt=""
                    />
                </div>
                <div className="opsecond__content__item3">
                    <h2>Удобство</h2>
                    <h5>
                        Благодаря инструментам, которые мы предлагаем, вы
                        сможете самостоятельно выбирать место, откуда работать:
                        будь то любимое кафе, уютная квартира, коворкинг или
                        берег океана
                    </h5>
                    <p>
                        Бизнес абсолютно мобилен. Логистика настроена и
                        продумана до мелочей. Поэтому вы сможете самостоятельно
                        составить комфортный график: выбрать дни и время как для
                        развития своего бизнеса, так и для отдыха. Сможете
                        совмещать его как с учебой, так и основной работой.
                    </p>
                </div>
                <div className="opsecond__content__img3">
                    <img
                        loading="lazy"
                        src="/img/opportunitiespg/lauren-mancke-xcI7f25UQSs-unsplash.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
