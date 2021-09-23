import React, { Component, useEffect, useState } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import GoogleMapReact from 'google-map-react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


import img1 from "../../../assets/images/img1.svg" 
import img2 from  "../../../assets/images/img2.svg"
import Universitet_pic from  "../../../assets/images/universitet_pic.svg"
import img3 from  "../../../assets/images/img3.svg" 

import "../../../style/css/singlepage.css"
import { useHistory, useParams } from 'react-router';
import Axios from '../../../utils/axios';
import { useSelector } from 'react-redux';


SwiperCore.use([Pagination]);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const dataT = require("../json/data_univer.json")

function SinglePage (props){
	const selector = useSelector(state=> state)
	console.log(selector);
	// const {payload} = selector.payload
	// const {id} = payload.data
	// console.log(id);
	const history = useHistory()
	const [data,setData] = useState(dataT)
	const params = useParams()
	const [univer,setUniver] = useState({
		id:'',
		name:'',
		location:'',
		description:'',
		founding_year:'',
		city:{
           id:'',
		   name:'',
		   country:''
		},
		motto:'',
		rating:'',
		rating_source:'',
		education_quality:[],
		living_price:''
	})

	const {name,city,rating,living_price} = univer
	props = {
		center: {
			lat: 45.46016,
			lng: 9.19457
		},
		zoom: 11
	};

	const fetchUniversityById = async() =>{
		try {
			const {data} =  await Axios.get(`/university/university/${params.id}`)
			localStorage.setItem('univerId',params.id)
			setUniver(data)
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}
 
	// const setFavourite = async()=>{
	// 	try {
	// 	  const data = await Axios.post('/enrollee/enrollee-user-favorite-university/',{
	// 		  university:params.id,
	// 		  enrollee_user:id
	// 	  })
	// 	  console.log(data);
	// 	} catch (error) {
		  
	// 	}
	//   }

	useEffect(()=>{
		fetchUniversityById()
	},[])
	console.log(params);
		return ( 
			<React.Fragment>
				<div className="single_page">
					<div className="sp_up">
						<div className="sp_img">
							<img src={Universitet_pic} alt="" width="100%"/>
						</div>
						<div className="sp_title">
							<div><h1>{name}</h1></div>
							<div><button onClick={()=> selector.payload.payload ?  history.push('/requisition'): history.push('/login')}>Подать</button></div>
						</div>
					</div>
					<div className="sp_navbar">
						<a href="#">Описание</a>
						<a href="#">Локация</a>
						<a href="#">Поступление</a>
						<a href="#">Галерея</a>
					</div>
					<div className="sp_main">
						<div className="sp_main1 sp1">
							<div className="sp_main_left">
								<div className="sp_table">
									<table>
										<tr>
											<td>Рейтинг</td>
											<td>{rating}</td>
										</tr>
										<tr>
											<td>Страна</td>
											<td>{city.name}</td>
										</tr>
										<tr>
											<td>Город</td>
											<td>{city.name}</td>
										</tr>
										<tr>
											<td>Бакалавриат</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Магистратура</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Цена прожив -ния</td>
											<td>{living_price}</td>
										</tr>
									</table>
								</div>
								<div className="sp_map">
								<GoogleMapReact
									// bootstrapURLKeys={{ key: "AIzaSyCIuhJElVEhGVPYptJbkrWxEy4lKzEoOA8" }}
									defaultCenter={props.center}
									defaultZoom={props.zoom}
								>
									<AnyReactComponent
										lat={45.46016}
										lng={9.19457}
										text=""
									/>
								</GoogleMapReact>
								</div>
							</div>
							<div className="sp_main1_right">
								<h1>
									<span>Миланский университет или University of Milan (UNIMI) -</span> государственное высшее учебное заведение в Италии. Начало академической деятельности UNIMI было положено в 1924 году. Главное здание университета расположено в Милано на территории кампуса городского типа.
								</h1><br />
								<h1>
									Рейтинг университета. University of Milan считается одним из самых престижных учебных заведений Италии и входит в пятёрку лучших вузов страны. Университет входит в 5% лучших высших учебных заведений мира, занимая 223 позицию. Сильными направлениями университета являются: «Искусство и Гуманитарные науки», «Инженерное дело и технологии», «Науки о жизни и медицина», «Естественные науки», «Социальные науки и менеджмент», «Математика», «Экономика и бизнес». Учебное заведение признаётся одним из самых лучших вузов по качеству образования и входит в топ 200 в мировом рейтинге по данному критерию. Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.
									Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.
								</h1>
							</div>
						</div>
						
						<div className="sp_main1 sp2">
							<div className="sp_main_left">
								<div className="sp_table">
									<table>
										<tr>
											<td>Рейтинг</td>
											<td>235</td>
										</tr>
										<tr>
											<td>Страна</td>
											<td>Италия</td>
										</tr>
										<tr>
											<td>Город</td>
											<td>Милан</td>
										</tr>
										<tr>
											<td>Бакалавриат</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Магистратура</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Цена прожив -ния</td>
											<td>$2,875/год</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="sp_main2_right">
								<h1>Факультеты</h1>
								<ul>
									<li>Факультет Науки</li>
									<li>Факультет Информационных Технологий</li>
									<li>Факультет Науки</li>
									<li>Факультет Информационных Технологий</li>
									<li>Факультет Науки</li>
									<li>Факультет Информационных Технологий</li>
								</ul>
							</div>
						</div>
						
						<div className="sp_main1 sp3">
							<div className="sp_main_left">
								<p>Мировой рейтинг</p>
							<ResponsiveContainer width="80%" height={300}>
								<AreaChart data={data}
								margin={{ top: 30, right: 0, left: 0, bottom: 0 }} >
								<defs>
								<linearGradient id="kirish" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#00587F" stopOpacity={0.4} />
									<stop offset="95%" stopColor="#00587F" stopOpacity={0} />
								</linearGradient>
								</defs>
								<XAxis dataKey="name" />
								<Tooltip />
								<CartesianGrid vertical="" strokeDasharray="10 10"/>
								<Area type="monotone" dataKey="value"
								stroke="#00587F" strokeWidth="3" fillOpacity={1} fill="url(#kirish)"
								/>
								</AreaChart>
							</ResponsiveContainer>
							</div>
							<div className="sp_main2_right">
								<h1>Процесс поступления</h1>
								<h2>
									Полное курирование поступления — от 789 USD
									Поступление в университет – важный и ответственный шаг в жизни каждого. Позвольте профессионалам быть рядом на каждом этапе поступления.
								</h2>
							</div>
						</div>
						
						<div className="sp_main1 sp4">
							<div className="sp_main_left">
								<div className="sp_table">
									<table>
										<tr>
											<td>Рейтинг</td>
											<td>235</td>
										</tr>
										<tr>
											<td>Страна</td>
											<td>Италия</td>
										</tr>
										<tr>
											<td>Город</td>
											<td>Милан</td>
										</tr>
										<tr>
											<td>Бакалавриат</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Магистратура</td>
											<td>$2,875/год</td>
										</tr>
										<tr>
											<td>Цена прожив -ния</td>
											<td>$2,875/год</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="sp_main2_right">
								<h1>Специалисты образовательного агентства Gateway Education:</h1>
								<ul>
									<li>Проконсультируют вас по вопросам образования за рубежом;</li>
									<li>Подберут университеты под ваш профайл и бюджет;</li>
									<li>Подготовят необходимый комплект документов;</li>
									<li>Отправят заявки в учебные заведения;</li>
									<li>Подадут документы на внутренние стипендии вузов;</li>
									<li>Помогут оформить студенческую визу.</li>
									<li>Мы организуем Ваше поступление за границу: для этого заполните заявку, и мы свяжемся с Вами в ближайшее время.</li>
								</ul>
							</div>
						</div>
						
						<div className="sp_main1 sp5">
							<div className="sp_main_left"></div>
							<div className="sp_main3_right">
								<a href="#">Подать документы</a>
								<a href="#">Консультация</a>
							</div>
						</div>
					
						<div className="sp_swiper">
						<Swiper
							slidesPerView={3.5}
							spaceBetween={30}
							pagination={{
								clickable: true
							}}
							breakpoints={{
								"10": {
								  slidesPerView: 1,
								  spaceBetween: 10
								},
								"375": {
								  slidesPerView: 1,
								  spaceBetween: 10
								},
								"425": {
								  slidesPerView: 1.5,
								  spaceBetween: 20
								},
								"640": {
								  slidesPerView: 2,
								  spaceBetween: 20
								},
								"768": {
								  slidesPerView: 2.5,
								  spaceBetween: 30
								},
								"1024": {
								  slidesPerView: 3.5,
								  spaceBetween: 30
								},
								"1440": {
								  slidesPerView: 4,
								  spaceBetween: 30
								}
							 }}
							className="mySwiper"
						>
							<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img2} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img3} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img2} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img3} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img2} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img3} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img1} alt="" /></SwiperSlide>
							<SwiperSlide><img src={img2} alt="" /></SwiperSlide>
						</Swiper>
						</div>
					</div>
				</div>
			</React.Fragment>
		 );
}
 
export default SinglePage;