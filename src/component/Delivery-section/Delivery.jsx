import React from 'react'
import './Delivery.scss'
// import showcase1 from '../../../public/assets/images/page1/page1_showcase1.png'

const Delivery = () => {
    return (
        <div className='wrapper'>
            <section className='delivery'>
                <div className='all__text'>
                    <h2>
                        Доставка товаров из Великобритании в Россию
                    </h2>

                    <p>
                        Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
                    </p>

                    <button>
                        Получить адрес в UK
                    </button>
                </div>
                <img src='assets/images/page1/page1_showcase1.png' alt="" />
            </section>


            <section className='sell'>
                <h2>
                    Насколько выгодно покупать?
                </h2>
                <img className='slide' src="./assets/images/page1/page1-slide.png" alt="" />

                <ul>
                    <li>
                        <h3>
                            Columbia Barlow Pass 550 Turbodown Jacket
                        </h3>

                        <div>
                            <img src="./assets/images/page1/page1-russia.png" alt="" />
                            <div>
                                <p>
                                    Цена в России
                                </p>
                                <h4>
                                    7891,46₽
                                </h4>
                            </div>

                        </div>
                        <div>
                            <img src="./assets/images/page1/page1_wear1.png" alt="" />
                            <img src="./assets/images/page1/left.png" alt="" />
                        </div>
                    </li>

                    <li>
                        <img src="./assets/images/page1/page1_wear2.png" alt="" />
                        <p>Срок доставки примерно 10 дней</p>
                        <h3>Вы экономите до <span>$119.56</span></h3>
                    </li>

                    <li>
                        <h3>
                            Columbia Barlow Pass 550 Turbodown Jacket
                        </h3>

                        <div>
                            <img src="./assets/images/page1/page1-russia.png" alt="" />
                            <div>
                                <p>
                                    Цена в России
                                </p>
                                <h4>
                                    7891,46₽
                                </h4>
                            </div>

                        </div>
                        <div>
                            <img src="./assets/images/page1/right.png" alt="" />
                            <img src="./assets/images/page1/page1_wear3.png" alt="" />
                        </div>
                    </li>
                </ul>

                <img className='slide' src="./assets/images/page1/slide2.png" alt="" />
            </section>
        </div>
    )
}

export default Delivery