import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import Footer from "../footer/footer"
import "../../../style/css/MainEduGate.css"


import chat_icon from "../../../assets/icon/chat.svg"
import univer_icon from   "../../../assets/icon/univer.svg" 
import country_icon from   "../../../assets/icon/country.svg"
import icon1 from   "../../../assets/icon/icon1.svg"
import icon2 from   "../../../assets/icon/icon2.svg"
import icon3 from   "../../../assets/icon/icon3.svg"
import icon4 from   "../../../assets/icon/icon4.svg" 
import icon5 from   "../../../assets/icon/icon5.svg" 
import icon6 from   "../../../assets/icon/icon6.svg" 

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);

// import data json
const cardData = require("../json/card.json")
const datafakultet = require("../json/topFakultet.json")
const dataSwipper = require("../json/swipper.json")


const MainEduGate = () => {
    const [change1, setChange1] = useState("")
    const [change2, setChange2] = useState("")
    const [change3, setChange3] = useState("")
    const [serach, setSearch] = useState(false)
    
    const [dataFilter, setdataFilter] = useState([])

    
    const fun1 = () => {
        let letFilter = cardData.filter( (filter) => (filter.country === change1) && (filter.stepen === change2) && (filter.facultet === change3) );
        setdataFilter(letFilter);
        setSearch(true)
    }
    return ( 
        <div className="mainEduGate">
            <div className="header">
                <h2>Выберите свой университет вместе с Education Gateway</h2>
                <h3>Education Gateway помогает абитуриентам найти свое направление в выборе профессии и поступить в престижные ВУЗы на территории СНГ</h3>
                <div className="listLvl">
                    <p><div className="circleList"></div> Бакалаврият</p>
                    <p><div className="circleList"></div> Магистратура</p>
                    <p><div className="circleList"></div> Аспирантура</p>
                    <p><div className="circleList"></div> Докторантура</p>
                </div>
                <button className="freeConsult">Бесплатная косультация</button>
                <div className="chat">
                    <h4>Найти Университет</h4>
                    <img src={chat_icon} alt="" />
                </div>
                <div className="filter">

                    <div className="dropDwn">
                            <select onChange={(event) => setChange1(event.target.value)}>
                                <option value="">Страна</option>
                                <option value="russia">russia</option>
                                <option value="usa">usa</option>
                                <option value="uk">uk</option>
                            </select>    
                    </div>   
                    <div className="dropDwn">
                            <select onChange={(event) => setChange2(event.target.value)}>
                                <option value="">Степень</option>
                                <option value="bakalavr">bakalavr</option>
                                <option value="magister">magister</option>
                            </select>    
                    </div>   
                    <div className="dropDwn">
                            <select onChange={(event) => setChange3(event.target.value)}>
                                <option value="it">Направления</option>
                                <option value="it">IT</option>
                                <option value="fizika">Fizika</option>
                                <option value="matematika">Matematika</option>
                            </select>    
                    </div>   

                    <div className="dropSearch" onClick={(fun1)}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="13.6879" cy="13.6311" rx="11.9847" ry="11.9407" stroke="#5C7C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.0234 22.5566L26.7221 27.2259" stroke="#5C7C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                </div>
                {/* end filter */}
            </div>
            {/* end header */}

            {/* resultBlock */}
            {/* stepen bakalavr
            "facultet":"fizika",
            "country":"russia" 
            .slice(0, 8)*/}
            {
                serach === true ?
                    <div  className="resultBlock">
                        <h5>Результаты поиска</h5>
                        <div className="result">
                            {/* card */}
                            {
                                dataFilter.slice(0, 8).map( (x) => {
                                    if(x.country === change1) {
                                        return(
                                            <div className="card">
                                                <img src={x.img} alt="" />
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1043 2.17701L12.9317 5.82776C13.1108 6.18616 13.4565 6.43467 13.8573 6.49218L17.9453 7.08062C18.9554 7.22644 19.3573 8.45055 18.6263 9.15194L15.6702 11.9924C15.3797 12.2718 15.2474 12.6733 15.3162 13.0676L16.0138 17.0778C16.1856 18.0698 15.1298 18.8267 14.227 18.3574L10.5732 16.4627C10.215 16.2768 9.78602 16.2768 9.42679 16.4627L5.773 18.3574C4.87023 18.8267 3.81439 18.0698 3.98724 17.0778L4.68385 13.0676C4.75257 12.6733 4.62033 12.2718 4.32982 11.9924L1.37368 9.15194C0.642715 8.45055 1.04464 7.22644 2.05466 7.08062L6.14265 6.49218C6.54354 6.43467 6.89028 6.18616 7.06937 5.82776L8.89574 2.17701C9.34765 1.27433 10.6523 1.27433 11.1043 2.17701Z" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <h1>{x.title1}</h1>
                                                <p>{x.title2}</p>
                                                <h2>Рейтинг: <span>{x.rating} место {x.ratingCountry}</span></h2>
                                                <h3>Качество обучения:</h3>
                                                <h4>Цена за один год: <span>${x.price}</span></h4>
                                                <p>{x.country}</p>
                                                <p>{x.stepen}</p>
                                                <p>{x.facultet}</p>
                                            </div>
                                        )
                                    }else{
                                        return ""
                                    }
                                } )
                            }
                            {/* end card */}
                        </div>
                        {/* end result */}
                    </div>
                :
                    ""
            }
            {/* end resultBlock */}

            {/* about block */}
            <div className="aboutBlock">
                <h5>О нас</h5>
                <div className="aboutUs">
                    <div>
                         {/*  */}
                        <div className="cardAbout">
                            <div className="icon">
                                <img src={univer_icon} alt="" />
                            </div>
                            <h4>250+ <br /><span>Университеты партнёры</span></h4>
                        </div>
                        {/*  */}
                        <div className="cardAbout">
                            <div className="icon">
                                <img src={country_icon} alt="" />
                            </div>
                            <h4>100+ <br /><span>Стран куда мы отправляем</span></h4>
                        </div>
                    </div>
                    <div>
                         {/*  */}
                        <div className="cardAbout">
                            <div className="icon">
                                <img src={univer_icon} alt="" />
                            </div>
                            <h4>250+ <br /><span>Университеты партнёры</span></h4>
                        </div>
                        {/*  */}
                        <div className="cardAbout">
                            <div className="icon">
                                <img src={country_icon} alt="" />
                            </div>
                            <h4>100+ <br /><span>Стран куда мы отправляем</span></h4>
                        </div>
                    </div>
                   
                </div>
            </div>
            {/* end about block */}

            {/* resultBlock */}
            <div className="resultBlock" id="university">
                <h5>Самые популярные Университетыа</h5>
                <div className="result">
                    {/* card */}
                    {
                        cardData.slice(0, 8).map( (x) => {
                            return(
                                <div className="card">
                                    <img src={x.img} alt="" />
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1043 2.17701L12.9317 5.82776C13.1108 6.18616 13.4565 6.43467 13.8573 6.49218L17.9453 7.08062C18.9554 7.22644 19.3573 8.45055 18.6263 9.15194L15.6702 11.9924C15.3797 12.2718 15.2474 12.6733 15.3162 13.0676L16.0138 17.0778C16.1856 18.0698 15.1298 18.8267 14.227 18.3574L10.5732 16.4627C10.215 16.2768 9.78602 16.2768 9.42679 16.4627L5.773 18.3574C4.87023 18.8267 3.81439 18.0698 3.98724 17.0778L4.68385 13.0676C4.75257 12.6733 4.62033 12.2718 4.32982 11.9924L1.37368 9.15194C0.642715 8.45055 1.04464 7.22644 2.05466 7.08062L6.14265 6.49218C6.54354 6.43467 6.89028 6.18616 7.06937 5.82776L8.89574 2.17701C9.34765 1.27433 10.6523 1.27433 11.1043 2.17701Z" stroke="#F2F2F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h1>{x.title1}</h1>
                                    <p>{x.title2}</p>
                                    <h2>Рейтинг: <span>{x.rating} место {x.ratingCountry}</span></h2>
                                    <h3>Качество обучения:</h3>
                                    <h4>Цена за один год: <span>${x.price}</span></h4>
                                </div>
                            )
                        } )
                    }
                    {/* end card */}
                </div>
                {/* end result */}
            </div>
            {/* end resultBlock */}


            {/* top fakultet */}
            <div className="topFacultetBlock">
                <h4>Самые популярные факультеты</h4>
                <div className="topFacultet">
                    {
                        datafakultet.map( (a) => {
                            return(
                                <div className="card">
                                    <img src={a.img } alt="" />
                                    <span></span>
                                    <p>{a.name}</p>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
            {/* end top fakultet */}

            {/* workBlock */}
            <div className="workBlock">
                <h4>Как мы работаем</h4>
                <div className="weareWork">
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <p>Ищите программу и университет</p>
                    </div>
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <p>Регистрируетесь на нашем сайте</p>
                    </div>
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <p>Заполняете анкету и подаете документы</p>
                    </div>
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon4} alt="" />
                        </div>
                        <p>Получаете ответ от Университета</p>
                    </div>
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon5} alt="" />
                        </div>
                        <p>Мы отправляем ваши документы в Универ</p>
                    </div>
                    {/* card */}
                    <div className="card">
                        <div>
                            <img src={icon6} alt="" />
                        </div>
                        <p>Оплачиваете за услуги нашей компании</p>
                    </div>
                </div>
            </div>
            {/* end workBlock */}
            
            {/* swipper block */}
            <div className="swipperBlock">
                <h4>Что говорят наши студенты?</h4>
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={30} 
                    slidesPerGroup={1} 
                    navigation={true} 
                    className="mySwiper"
                    pagination={{
                        "clickable": true
                    }} 
                    breakpoints={{
                        "10": {
                          "slidesPerView": 1,
                          "spaceBetween": 10
                        },
                        "320": {
                          "slidesPerView": 1,
                          "spaceBetween": 10
                        },
                        "375": {
                          "slidesPerView": 1,
                          "spaceBetween": 10
                        },
                        "425": {
                          "slidesPerView": 1.2,
                          "spaceBetween": 20
                        },
                        "768": {
                          "slidesPerView": 2.5,
                          "spaceBetween": 20
                        },
                        "1024": {
                          "slidesPerView": 3,
                          "spaceBetween": 20
                        },
                        "1280": {
                          "slidesPerView": 3,
                          "spaceBetween": 30
                        }
                    }}
                    >
                   <div>
                        {
                            dataSwipper.map( (w) => {
                                return(
                                    
                                        <SwiperSlide>
                                            <div className="card">
                                                <div className="top">
                                                    <img src={w.img} alt="" />
                                                    <div>
                                                        <h1>{w.fullName}</h1>
                                                        <h2>{w.lvl} по {w.facultet}</h2>
                                                        <h3>{w.universtiy}</h3>
                                                    </div>
                                                </div>
                                                <p>{w.title}</p>
                                            </div>
                                        </SwiperSlide>
                                    
                                )
                            } )
                        }
                   </div>
                
                </Swiper>
            </div>
            {/* end swipper block */}


            {/* footer */}
            <Footer />
            {/* footer */}
        </div>
     );
}
 
export default MainEduGate;