import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import copy from  "../../../../assets/icon/copy.svg" 
import click from  "../../../../assets/icon/click.svg" 
import payme from  "../../../../assets/icon/payme.svg"
import bank from  "../../../../assets/icon/bank.svg"
import CopyText from 'react-copy-text'
import folder_icon from  "../../../../assets/icon/folder_icon.svg" 
import tasdiq from  "../../../../assets/icon/tasdiq.svg"
import error from  "../../../../assets/icon/error.svg"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Navbar from '../Navbar';

class Oplata3 extends Component {
	 state = { 
		textToCopy: '',
		modal1:false,
		modal2:false
	 }
	handleopen1 = () => {
		this.setState({
			modal1: true
		})
	}
	handleclose1 = () => {
		this.setState({
			modal1: false
		})
	}
	handleopen2 = () => {
		this.setState({
			modal2: true
		})
	}
	handleclose2 = () => {
		this.setState({
			modal2: false
		})
	}
	onButtonClick = () => this.setState({ textToCopy: [
		"Получатель: “Education Gateway”",
		"ИНН: 2340212",
		"Х/Р: 23402000300100001010",
		"Банк получателя: РКЦ ГУ ЦБ г. по Ташкент",
		"МФО банка получателя: 00014",
	] })
  	onCopied = (text) => console.log(`${text} was copied to the clipboard`)

	render() {
		return ( 
			<React.Fragment>
				<div className="navRegist">
					<Navbar/>
				</div>
				<div className="singup_asos container">
					<div className="nav_name">
						<h1>Процесс поступления</h1>
					</div>
					<div className="up_nav">
						<h2 className="singup_pass">Регистрация/Войти</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_pass">Профайл</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_pass">Файлы</h2>
						<svg id="svg_pass" width="82" height="10" viewBox="0 0 82 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z" fill="#5C7C8A"/>
						</svg>
						<h2 className="singup_active2">Оплата</h2>
					</div>
					<div className="main_singup">
						<h1>Оплата</h1>
						<div className="oplata_asos">
							<div className="oplata_tip">
								<p>Выберите тип оплаты</p>
								<div className="tolov_turlari">
									{/* <NavLink activeClassName="oplata_active" to="/payment-click"><img src={click} alt="" /></NavLink> */}
									{/* <NavLink activeClassName="oplata_active" to="/payment-payme"><img src={payme} alt="" /></NavLink> */}
									<NavLink activeClassName="oplata_active" className="bank_tolov" to="/payment-transaction"><img src={bank} alt="" /> Банковский перевод</NavLink>
								</div>
								<div className="oplata_switch">
									<div className="bank_card">
										<h1>Наши реквизиты:</h1>
										<div className="bank_list"><h5>Получатель: </h5><h5>“Education Gateway”</h5></div>
										<div className="bank_list"><h5>ИНН: </h5><h5>2340212</h5></div>
										<div className="bank_list"><h5>Х/Р: </h5><h5>23402000300100001010</h5></div>
										<div className="bank_list"><h5>Банк получателя: </h5><h5>РКЦ ГУ ЦБ г. по Ташкент</h5></div>
										<div className="bank_list"><h5 onChange={this.state.textToCopy}>МФО банка получателя: </h5><h5>00014</h5></div>
										<button onClick={this.onButtonClick}><img src={copy} alt="" />Скопировать реквизиты</button>
										<CopyText  text={this.state.textToCopy} onCopied={this.onCopied} />
									</div>
								</div>
							</div>
							<div className="oplata_kvitansa">
								<p>Квитанция</p>
								<div className="kvitansa_list"><h1>Поиск академических програм</h1><p>$450</p></div>
								<div className="kvitansa_list"><h1>Подбор подкурсов</h1><p>$450</p></div>
								<div className="kvitansa_list"><h1>Оформление визы</h1><p>$450</p></div>
								<div className="kvitansa_list"><h1>Общее</h1><p>$1,350</p></div>
							</div>
						</div>
						<div className="bank_btn">
							<div className="importFile" htmlFor="chFile"> 
								<img src={folder_icon} alt=""  />
								<p>
									Drop your files here or a    
									<input type="file" id="chFile"/> 
									<label htmlFor="chFile">choose file</label>
								</p>
							</div>
							<button onClick={this.handleopen1} className="a_send">Отправить</button>
							<button  style={{background: "#e6ebed",border:'none',color:'#00587f',cursor:'pointer'}} className="a_send">Сохранить</button>
						</div>
					</div>
					<Modal
						aria-labelledby="spring-modal-title"
						aria-describedby="spring-modal-description"
						className="modalll"
						open={this.state.modal1}
						onClose={this.handleclose1}
						className="oplata_modal"
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={this.state.modal1}>
							<div className="alert_tasdiq">
								<img src={tasdiq} alt="" />
								<p>Ваш платеж был проведен успешно</p>
								<button onClick={this.handleclose1}>Вернуться</button>
							</div>
						</Fade>
					</Modal>
					<Modal
						aria-labelledby="spring-modal-title"
						aria-describedby="spring-modal-description"
						className="modalll"
						open={this.state.modal2}
						onClose={this.handleclose2}
						className="oplata_modal"
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={this.state.modal2}>
						<div className="alert_error">
							<img src={error} alt="" />
							<p>Произошла ошибка при оплате</p>
							<div className="alert_btn">
								<button Click={this.submit_error}>Отменить</button>
								<button>Повторить оплату</button>
							</div>
				  		</div>
						</Fade>
					</Modal>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default Oplata3;