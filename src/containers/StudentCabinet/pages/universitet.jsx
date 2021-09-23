import React, { useRef, useState,useEffect } from 'react';
// SWIPPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';

// import css
import "../../../style/css/universitet.css"  
import StudentSidebar from './SidebarStudent';
import { Empty ,Button} from 'antd';
import EmptyPic from '../../../assets/icon/empty.svg'
import { useHistory } from 'react-router';
import Axios from '../../../utils/axios'
SwiperCore.use([Pagination]);

const dataCard = require("../json/card.json")

const Universitet = () => {
const [universities,setUniversities] = useState([])
const history = useHistory()    
const univerId = localStorage.getItem('univerId')
console.log(univerId);

const fetchSelectedUniver = async ()=>{
    try {
        const res = await Axios.get('enrollee/enrollee-user-favorite-university/')
        console.log(res);
        const {status} = res
        const {results} = res.data
        console.log(results);
        if(status === 200) {
            
            const newData = []
            for (let x=0; x < results.length; x++) {
            newData.push(results[x].university)
            console.log(results[x].university);
           }
           setUniversities(newData)
            console.log(newData);
        }
    } catch (error) {
        console.log(error.response);     
    }
}

useEffect(()=>{
    fetchSelectedUniver()
},[])
    return ( 
        <>
        <StudentSidebar/>
        <div className="unniversitetBlock ">
            <div className="top">
                <h1>Ваши университеты</h1>
                <div>
                    <img src="https://picsum.photos/70" alt="" />
                    <h2>Nargiza Akhmedova <span>IT Specialist</span></h2>
                </div>
            </div>
            <div className="bottom">
                {/* <h1>Избранные </h1> */}
                <Empty 
                 image={EmptyPic}
                 imageStyle={{
                    height: 309,
                  }}
                 description={
                    <span style={{fontWeight:"600",fontSize:"26px"}}>
                     У вас пока не имеется выбранных университетов
                    </span>
                  }
                 
                >
                <Button  style={{height:"64px",width:"600px",background:"#00587F",color:"#fff",borderRadius:"10px",fontSize:"20px"}} onClick={()=> history.push('/')}>Найти университет</Button>
                </Empty>
                <div className="cardSwipperBlock">
                    <Swiper 
                        
                        slidesPerView={3.3} 
                        spaceBetween={20} 
                        slidesPerGroup={1} 
                        className="mySwiper"
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
                            "390": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                            },
                            "425": {
                            "slidesPerView": 1.2,
                            "spaceBetween": 20
                            },
                            "500": {
                            "slidesPerView": 1.4,
                            "spaceBetween": 20
                            },
                            "768": {
                            "slidesPerView": 2.2,
                            "spaceBetween": 20
                            },
                            "1024": {
                            "slidesPerView": 2.2,
                            "spaceBetween": 20
                            },
                            "1100": {
                            "slidesPerView": 2,
                            "spaceBetween": 5
                            },
                            "1200": {
                            "slidesPerView": 2.18,
                            "spaceBetween": 5
                            },
                            "1280": {
                            "slidesPerView": 2.3,
                            "spaceBetween": 10
                            },
                            "1400": {
                            "slidesPerView": 2.5,
                            "spaceBetween": 10
                            },
                            "1500": {
                            "slidesPerView": 2.5,
                            "spaceBetween": 10
                            },
                            "1600": {
                            "slidesPerView": 3.2,
                            "spaceBetween": 30
                            }
                        }}
                        >
                        
                        {
                            universities.map( (x) => {
                                console.log(x);
                                const  {name,description,rating,location,living_price_per_annum,bachelor_degree_fee_per_annum} = x
                                return(
                                    <SwiperSlide>
                                    <div className="card">
                                        <img src="https://universegroup.uz/wp-content/uploads/2020/02/harvard.jpg" alt="" />
                                        <h1>{name}</h1>
                                        <p>{description}</p>
                                        <h3>Рейтинг: <span>{rating} место  ({location} Ratings)</span></h3>
                                        <h4>Качество обучения:</h4>
                                        <h5>Цена за один год: <span>{bachelor_degree_fee_per_annum}</span></h5>
                                    </div>
                                    </SwiperSlide>
                                )
                            } )
                        }
                        
                    </Swiper>
                </div>
                <div className="document">
                    {/* <h1>Куда вы подали документы</h1> */}
                    {/* {
                        dataCard.slice(0, 1).map( (x) => {
                            return(
                                <div className="card">
                                    <img src={x.img} alt="" />
                                    <h1>{x.title1}</h1>
                                    <p>{x.title2}</p>
                                    <h3>Рейтинг: <span>{x.rating} место  ({x.ratingCountry} Ratings)</span></h3>
                                    <h4>Качество обучения:</h4>
                                    <h5>Цена за один год: <span>{x.price}</span></h5>
                                </div>
                            )
                        } )
                    } */}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Universitet;