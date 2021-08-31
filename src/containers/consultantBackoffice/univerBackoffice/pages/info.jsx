import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import NumberFormat from 'react-number-format';
import GoogleMapReact from 'google-map-react';

//import img
import userpic from  "../../../../assets/icon/userpic.svg" 
import image from  "../../../../assets/icon/image.svg" 
import img1 from  "../../../../assets/icon/img1.svg" 
import img2 from  "../../../../assets/icon/img2.svg" 
import img3 from  "../../../../assets/icon/img3.svg" 
import img4 from  "../../../../assets/icon/img4.svg" 
import plus from  "../../../../assets/icon/plus.svg" 

//import css
import "../../../../style/css/info.css"

///

const foiz = "75"

/// input range ///
const marks = [
	{
	  value: 0,
	  label: "$0"
	}, {
	  value: 200,
	  label: "$200"
	}, {
	  value: 500,
	  label: "$500"
	}, {
	  value: 800,
	  label: "$800"
	}, {
	  value: 1000,
	  label: "$1000"
	}, {
	  value: 2000,
	  label: "$2000"
	}, {
	  value: 3000,
	  label: "$3000+"
	}
];
const SSlider = withStyles({
	root: {
		color: "#00587F",
		height: 15
	},
	thumb: {
		height: 45,
		width: 45,
		backgroundColor: "#E5F7FF",
		border: "6px solid currentColor",
		marginTop: -17,
		marginLeft: -12,
	  	"&:focus, &:hover, &$active": {
			boxShadow: "inherit"
		}
	},
	active: {},
	valueLabel: {
	  	left: "calc(-50% - 3px)"
	},
	track: {
		height: 15,
		borderRadius: 7
	},
	rail: {
		height: 15,
		borderRadius: 7,
		backgroundColor: "#cdeefce8"
	}
})(Slider);
 


function valuetext(value) {
	return "$" + `${value}`;
}


//// google map locatsiyasi
const center = {
	lat: 42.37702172345865, 
	lng: -71.116660363554
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Info = () => {
	return ( 
		<React.Fragment>
			<div className="info_h1 up_nav">
				<div>
					<h1 className="link_h1 ">Данные</h1>
				</div>
				<div className="user_info">
					<img src={userpic} alt="" />
					<div>
						<h1>Harvard University</h1>
						<h2>Boston, USA</h2>
					</div>
				</div>
			</div>
			<img className="img_big" src={image} alt="" />
			<div className="info">
				<div className="info-1">
					<h1>Ваш профиль заполнен на {foiz}%</h1>
					<h2>Укажите локацию на карте</h2>
					<div className="info_line">
						<div className="info_out">
							<div className="info_in" style={{width:`${foiz}%`}}><h1>{foiz}%</h1></div>
						</div>
						<div className="info_line_list">
							<div><h3>Заполнить описание</h3></div>
							<div><h3>Загрузите 10 фото</h3></div>
							<div><h3>Укажите квоту</h3></div>
							<div><h3>Укажите локацию на карте</h3></div>
						</div>
					</div>
				</div>
				<div className="single_down">
					<div className="single_h1">
						<h1>Ваши данные</h1>
						<a href="#">Изменить</a>
					</div>
					<div className="single_info">
						<div className="info_1">
							<div><h1>Название</h1></div>
							<div><p>Harvard Univeristy</p></div>
						</div>
						<div className="info_1">
							<div><h1>Год основание</h1></div>
							<div><p>1670</p></div>
						</div>
						<div className="info_1">
							<div><h1>Страна</h1></div>
							<div><p>США</p></div>
						</div>
						<div className="info_1">
							<div><h1>Город</h1></div>
							<div><p>Cambridge, Massachusets</p></div>
						</div>
						<div className="info_1">
							<div><h1>Девиз</h1></div>
							<div><p>Veritas (Истина)</p></div>
						</div>
						<div className="info_1">
							<div><h1>Бакалавров</h1></div>
							<div><p>6,700</p></div>
						</div>
						<div className="info_1">
							<div><h1>Магистров</h1></div>
							<div><p>15,750</p></div>
						</div>
						<div className="info_1">
							<div><h1>Преподователей</h1></div>
							<div><p>15,750</p></div>
						</div>
						<div className="info_1">
							<div><h1>Начальная зар - плата выпускников</h1></div>
							<div><p>$15,750 в год</p></div>
						</div>
					</div>
				</div>
				<div className="info-2">
					<div className="single_h1">
						<h1>Ваши данные</h1>
						<a href="#">Изменить</a>
					</div>
					<div className="info_2_list">
						<h1>Гарвардский университет (Гарвард) (англ. Harvard University) — один из самых известных университетов США и всего мира, старейший вуз США. Находится в городе Кембридж (входит в состав Бостонской городской агломерации), штат Массачусетс.</h1>
						<h1>По состоянию на 2010 год в Гарварде работает около 2100 преподавателей и учится около 6700 студентов и 14500 последипломников. 75 лауреатов Нобелевской премии были связаны с университетом как студенты, преподаватели или сотрудники. Гарвардский университет занимает первое место в стране по числу миллиардеров среди выпускников, а его библиотека — крупнейшая академическая в США и третья по величине в стране.</h1>
						<h1>Гарвард входит в группу элитных американских университетов — Лигу плюща.</h1>
						<h1>Гарвард имеет самый большой эндаумент (целевой капитал) в мире, который составляет 37,1 млрд долларов.</h1>
					</div>
				</div>
				<div className="info-3">
					<div className="single_h1">
						<h1>Фото галерея</h1>
					</div>
					<div className="info_3_list">
						<div><img src={img1} alt="" /></div>
						<div><img src={img2} alt="" /></div>
						<div><img src={img3} alt="" /></div>
						<div><img src={img4} alt="" /></div>
						<div><img src={img1} alt="" /></div>
						<div><img src={img2} alt="" /></div>
						<div><img src={img3} alt="" /></div>
						<div>
							<div className="type_file">
								<label htmlFor="chFile">
									<input type="file" name="" id="chFile" />
									<img src={plus} alt="" />
								</label>
							</div>
							
						</div>
					</div>
				</div>
				<div className="info-4">
					<div className="single_h1">
						<h1>Квота на прием студентов</h1>
					</div>
					<div className="info_4_list">
						<NumberFormat className="input_kvota" format="$#######" placeholder="$0" name="alt" mask=" "/>
						<SSlider
							defaultValue={0}
							name="alt"
							max={6000}
							step={5}
							marks={marks}
							valueLabelDisplay="on"
							valueLabelFormat={valuetext}
						/>
					</div>
				</div>
				<div className="info-4">
					<div className="single_h1">
						<h1>Локация на карте</h1>
					</div>
					<div className="info_5_list">
						<GoogleMapReact
							// bootstrapURLKeys={{ key: "AIzaSyCIuhJElVEhGVPYptJbkrWxEy4lKzEoOA8" }}
							defaultCenter={center}
							defaultZoom={15}
						>
							<AnyReactComponent
								lat={42.37702172345865}
								lng={-71.116660363554} 
								text=""
							/>
						</GoogleMapReact>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
 
export default Info;

