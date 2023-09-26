import React, {useEffect, useState} from "react";
import '../styles.css';
import {getList} from "../components/list";
export function MainPage(){

    return(
        <>
            <main>
                <div className="main-part">
                    <div className="main__text">
                        <p>
                            One day the owner of CO&GO was so depressed and did not want to go out of her bed,
                            but the smell of the coffee from the nearest coffee shop made her get up.
                            She went out of her flat, took coffee and saw pictures that made her really happy.
                            She noticed leaves that had fallen to streets and people enjoying their life, and
                            she understood that this world is so beautiful with a cup of the greatest drink.
                        </p>
                        <p>
                            So we hope that our coffee will help you in the darkest times and will be part of the brightest
                            ones!
                        </p>
                    </div>
                    <img className="main__picture" src={require("./images_react/img2.jpg")} alt="coffee"/>
                </div>
                <div className="slider">
                    <div className="itc-slider" data-slider="itc-slider" data-loop="true" data-autoplay="false">
                        <div className="itc-slider__wrapper">
                            <div className="itc-slider__items">
                                <div className="itc-slider__item">
                                    <div className="container-modules">
                                        <div className="text">HOT BEVERAGES</div>
                                        <img className="container-module__item" src={require("./images_react/img3.png")} alt="hot drinks"/>
                                    </div>
                                </div>
                                <div className="itc-slider__item">
                                    <div className="container-modules">
                                        <div className="text">DELICIOUS BUNS</div>
                                        <img className="container-module__item" src={require("./images_react/img4.png")} alt="bakery"/>
                                    </div>
                                </div>
                                <div className="itc-slider__item">
                                    <div className="container-modules">
                                        <div className="text">COLD BEVERAGES</div>
                                        <img className="container-module__item" src={require("./images_react/img5.png")} alt="cold drinks"/>
                                    </div>
                                </div>
                                <div className="itc-slider__item">
                                    <div className="container-modules">
                                        <div className="text">COLD BEVERAGES</div>
                                        <img className="container-module__item" src={require("./images_react/img5.png")} alt="cold drinks"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="itc-slider__btn itc-slider__btn_prev"></button>
                        <button className="itc-slider__btn itc-slider__btn_next"></button>
                    </div>
                </div>
                <div className="main-part">
                    <img className="main__picture" src={require("./images_react/img6.png")} alt="coffee"/>
                    <div className="main__text">
                        <p>
                            Do you want a really special coffee and have disposable income? Try Kopi Luwak.
                            This special blend is one of the most expensive coffees on the market, and can run
                            hundreds of dollars per pound due to its rich taste and complex process. What makes
                            the process of creating this delicacy so challenging?
                        </p>

                        <p>
                            Prior to being harvested by humans, the beans are eaten, digested, and defecated by
                            civets, strange tree-dwelling, cat-like animals. The digestive juices ferment the
                            berries in a way that creates a smooth-tasting cup of coffee with little bitterness.
                        </p>
                        <p>
                            Unfortunately, according to PETA, civets are force-fed the coffee beans while in
                            confined in cages. By the time the cat-like creatures are released back in the wild,
                            their health is in poor condition.

                        </p>
                    </div>
                </div>
            </main>
            <footer>
                <ul>Contacts:
                    <li>Address: Saint-Petersburg, Lenin Street, 12</li>
                    <li>Email: co_n_go@gmail.com</li>
                </ul>
            </footer>
        </>
    )
}

export default MainPage;