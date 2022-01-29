import { useMemo, useRef, useEffect, useState } from "react";

export default function Mainproduct() {
    const url = "https://new.mygreenway.com/shop?gw=drGWhF1lHb#";
    const targetImg = useRef();
    const targetContent = useRef();

    const [productImgAppear, setProductImgAppear] = useState(null);
    const [productContentAppear, setProductContentAppear] = useState(null);

    function redirectTo() {
        window.open(url, "_blank");
    }

    const options = useMemo(() => {
        return {
            root: null,
            threshold: 0.1,
            rootMargin: "-200px 0px",
        };
    }, []);

    useEffect(() => {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                setProductImgAppear("appear");
                observer.unobserve(targetImg.current);
            }
        }, options);

        imgObserver.observe(targetImg.current);

        const contentObserver = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    setProductContentAppear("appear");
                    observer.unobserve(targetContent.current);
                }
            },
            options
        );

        contentObserver.observe(targetContent.current);
    }, []);

    return (
        <div className="main__product" id="main__product">
            <div className="main__product__wrapper">
                <div className="main__product__content">
                    <div className="main__product__headline">
                        <h2>ПРОДУКЦИЯ</h2>
                    </div>
                    <div
                        className="main__product__container"
                        ref={targetContent}
                    >
                        <div
                            className={`main__product__item1 ${productContentAppear}`}
                        >
                            <strong>13</strong>
                            <h4>ТОРГОВЫХ МАРОК</h4>
                        </div>
                        <div
                            className={`main__product__item2 ${productContentAppear}`}
                        >
                            <strong>280</strong>
                            <h4>ПРОДУКТОВ</h4>
                            <div className="main__product__item__inner">
                                <span>ДЛЯ ВАШЕГО ДОМА, КРАСОТЫ И ЗДОРОВЬЯ</span>
                                <p>
                                    Мы с заботой относимся к защите окружающей
                                    среды, поэтому каждый наш продукт разработан
                                    по принципу безопасности и экологичности.
                                </p>
                                <p>
                                    В производстве мы используем только
                                    натуральные составы и безопасные материалы,
                                    благодаря чему товары подлежат многоразовому
                                    использованию.
                                </p>
                                <button onClick={redirectTo}>
                                    ВСЯ ПРОДУКЦИЯ
                                    <img src="/svg/arrow.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__product__imges">
                    <div
                        className="main__product__imges__inner"
                        ref={targetImg}
                    >
                        <img
                            className={`main__product__img ${productImgAppear}`}
                            loading="lazy"
                            src="/img/mainpg/green_fiber_main_2c8Xa1V.png"
                            alt=""
                        />
                        <img
                            className={`main__product__img ${productImgAppear}`}
                            loading="lazy"
                            src="/img/mainpg/sharme_minerals_main_sLihVWU.png"
                            alt=""
                        />
                        <img
                            className={`main__product__img ${productImgAppear}`}
                            loading="lazy"
                            src="/img/mainpg/welllab_main_HDoqAWP.png"
                            alt=""
                        />
                        <img
                            className={`main__product__img ${productImgAppear}`}
                            loading="lazy"
                            src="/img/mainpg/teavitall_main_j4tBAXH.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
