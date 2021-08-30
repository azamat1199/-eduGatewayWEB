import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// import img
import search_icon from "../../icon/search.svg"
import settings from "../../icon/settings.svg"
import close_modal from "../../icon/close_modal.svg"
import folder_icon from "../../icon/folder_icon.svg"
import pencil from "../../icon/pencil.svg"
import doc from "../../icon/doc.svg"
import delet from "../../icon/delet1.svg"
import arrow1 from "../../icon/arrow1.svg"

// import css 
import "../../css/SidebarUniverstitet.css"
import "../../css/fakultet.css"
import "react-datepicker/dist/react-datepicker.css";

const Talabalar = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	// modal
	const [fixEnd, setFix] = useState(false);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [open_change, setOpen_change] = React.useState(false);
	const handleOpen_change = () => {
		setOpen_change(true);
	};

	const handleClose_change = () => {
		setOpen_change(false);
	};
	// modal
	return ( 
		<div className="asos">
			<div className="Up_navbar">
					<h4>Студенты</h4>
					<div>
						<img src="https://picsum.photos/70" alt="" />
						<div>
							<h5>Nargiza Akhmedova</h5>
							<p>IT Specialist</p>
						</div>
					</div>
			</div>
			<div className="SidebarUniverstitet">
					<button onClick={handleOpen}>Добавить университет</button>
					<div className="settSearch">
						<div className="searchUniv">
							<img src={search_icon} alt="" />
							<input type="text" placeholder="Поиск университетов"/>
						</div>
						<button onClick={()=>{setFix( !fixEnd)}} className="settingsUniver">
							<img src={settings} alt=""  />
						</button>
					</div>
					{/* end settSearch */}
					<div className="univerList talabalar" id="scroll_bar">
						<table>
							<thead>
									<tr>
										<th className="firstTD">ФИО</th>
										<th>Факультет</th>
										<th>Университет</th>
										<th>Номер телефона</th>
										<th>Номер контракта</th>
										<th>Дата контракта</th>
										<th>Оплата за услуги</th>
										<th>Филиал</th>
										<th>Менеджер</th>
										<th></th>
									</tr>
							</thead>
							<tbody>
									<tr>
										<td className="firstTD">Максудов Сардорбек</td>
										<td>Business Management</td>
										<td>Harvard University</td>
										<td>+998(97) 145 - 65 - 55</td>
										<td>2021/1637	</td>
										<td>07/15/2021	</td>
										<td>$12,000</td>
										<td>Ташкент</td>
										<td>Sabina Sabirova</td>
										<td>
											<button onClick={handleOpen_change}><img src={pencil} alt="" width="28"/></button>
											<button><img src={doc} alt="" width="28"/></button>
											<button><img src={delet} alt="" width="28"/></button>
										</td>
									</tr>
									<tr>
										<td className="firstTD">Максудов Сардорбек</td>
										<td>Business Management</td>
										<td>Harvard University</td>
										<td>+998(97) 145 - 65 - 55</td>
										<td>2021/1637	</td>
										<td>07/15/2021	</td>
										<td>$12,000</td>
										<td>Ташкент</td>
										<td>Sabina Sabirova</td>
										<td>
											<button onClick={handleOpen_change}><img src={pencil} alt="" width="28"/></button>
											<button><img src={doc} alt="" width="28"/></button>
											<button><img src={delet} alt="" width="28"/></button>
										</td>
									</tr>
									<tr>
										<td className="firstTD">Максудов Сардорбек</td>
										<td>Business Management</td>
										<td>Harvard University</td>
										<td>+998(97) 145 - 65 - 55</td>
										<td>2021/1637	</td>
										<td>07/15/2021	</td>
										<td>$12,000</td>
										<td>Ташкент</td>
										<td>Sabina Sabirova</td>
										<td>
											<button onClick={handleOpen_change}><img src={pencil} alt="" width="28"/></button>
											<button><img src={doc} alt="" width="28"/></button>
											<button><img src={delet} alt="" width="28"/></button>
										</td>
									</tr>
							</tbody>
						</table>
					</div>
					{/* end univerList */}
					{/* Filter */}
					{
						// fixEnd ?
						fixEnd === true ?
						<div className="FilterFix">
							<div className="fixLeft" onClick={()=>{setFix( !fixEnd)}}></div>
							<div className="FilterUniver">
									<h4>Фильтры</h4>
									<p>Выберите период</p>
									<div className="datapickBlock">
										<div>
											<DatePicker
													selected={startDate}
													onChange={(date) => setStartDate(date)}
													selectsStart
													startDate={startDate}
													endDate={endDate}
													placeholderText="dan"
											/>
										</div>
										<div>
											<DatePicker
													selected={endDate}
													onChange={(date) => setEndDate(date)}
													selectsEnd
													startDate={startDate}
													endDate={endDate}
													minDate={startDate}
													placeholderText="gacha"
											/>
										</div>
									</div>
									<p>Выберите страну</p>
									<div className="selectCountry">
										<select name="" id="">
											<option value="">Турция</option>
											<option value="">Россия</option>
											<option value="">США</option>
											<option value="">Узбекистан</option>
										</select>
									</div>
									<p>Выберите город</p>
									<div className="selectCountry">
										<select name="" id="">
											<option value="">Анталия</option>
											<option value="">Анкара</option>
											<option value="">Истанбул</option>
											<option value="">Измир</option>
										</select>
									</div>
									<button>Применить</button>
							</div>
							{/* end FilterUniver */}
						</div>
						:
						null
					}
					
					
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className="class1"
						open={open_change}
						onClose={handleClose_change}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open_change}>
							<div className="addNewUniverModalUniver talaba_modal" id="scroll_bar">
								<img onClick={handleClose_change} src={close_modal} alt="" />
								<div className="modalContainer">
									<h5>Изменить</h5>
									<div>
										<label>ФИО</label>
										<input type="text" />
									</div>
									<div>
										<label>Номер телефона</label>
										<input type="text" />
									</div>
									<div>
										<label>Университет</label>
										<select>
												<option>Harvard University</option>
												<option>University 1</option>
												<option>University 2</option>
										</select>
									</div>
									<div>
										<label>Факультет</label>
										<select>
												<option>Экономика</option>
												<option>Факультет 1</option>
												<option>Факультет 2</option>
										</select>
									</div>
									<div>
										<label>Логин</label>
										<input type="text" />
									</div>
									<div>
										<label>Пароль</label>
										<input type="text" />
									</div>
									<div>
										<label>Документы</label>
										<div className="importFile">
												<img src={folder_icon} alt="" />
												<p>
													Drop your files here or a    
													<input type="file" id="chFile"/> 
													<label htmlFor="chFile">choose file</label>
												</p>
										</div>
									</div>
									<button>Добавить</button>
									<button onClick={handleClose_change} className="back_btn"><img src={arrow1} alt="" /> Вернуться</button>
								</div>
							</div>
						</Fade>
					</Modal>
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className="class1"
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open}>
							<div className="addNewUniverModalUniver talaba_modal" id="scroll_bar">
								<img onClick={handleClose} src={close_modal} alt="" />
								<div className="modalContainer">
									<h5>Добавить нового студента</h5>
									<div>
										<label>ФИО</label>
										<input type="text" />
									</div>
									<div>
										<label>Номер телефона</label>
										<input type="text" />
									</div>
									<div>
										<label>Университет</label>
										<select>
												<option>Harvard University</option>
												<option>University 1</option>
												<option>University 2</option>
										</select>
									</div>
									<div>
										<label>Факультет</label>
										<select>
												<option>Экономика</option>
												<option>Факультет 1</option>
												<option>Факультет 2</option>
										</select>
									</div>
									<div>
										<label>Логин</label>
										<input type="text" />
									</div>
									<div>
										<label>Пароль</label>
										<input type="text" />
									</div>
									<div>
										<label>Документы</label>
										<div className="importFile">
												<img src={folder_icon} alt="" />
												<p>
													Drop your files here or a    
													<input type="file" id="chFile"/> 
													<label htmlFor="chFile">choose file</label>
												</p>
										</div>
									</div>
									<button>Добавить</button>
									<button onClick={handleClose} className="back_btn"><img src={arrow1} alt="" /> Вернуться</button>
								</div>
							</div>
						</Fade>
					</Modal>
					{/* end Filter */}
			</div>
		</div>
		// end SidebarUniverstitet
	);
}

export default Talabalar;