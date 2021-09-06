import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// import img
import search_icon from "../../../assets/icon/search.svg"   
import settings from    "../../../assets/icon/settings.svg"  
import info_icon from   "../../../assets/icon/info_icon.svg"  
import close_modal from "../../../assets/icon/close_modal.svg"   
import folder_icon from "../../../assets/icon/folder_icon.svg"   


// import css 
import "../../../style/css/SidebarUniverstitet.css"
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from './SidebarConsult';



const SidebarUniverstitet = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [fixEnd, setFix] = useState(false);

    const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
    // modal
    return ( 
        <Sidebar>
        <div className="asos">
            <div className="Up_navbar">
                <h4>Университеты</h4>
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
                <div className="univerList">
                    <table>
                        <thead>
                            <tr>
                                <th className="firstTD">Название</th>
                                <th>Город</th>
                                <th>Срок</th>
                                <th>Статус</th>
                                <th className="infoTd">Информация</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="firstTD">Akdeniz Universiteti (Turkiya)</td>
                                <td>Antaliya</td>
                                <td>31.12.2021</td>
                                <td className="priDoc">Прием документов</td>
                                <td className="infoTd"><img src={info_icon} alt=""/></td>
                            </tr>
                            <tr>
                                <td className="firstTD">Akdeniz Universiteti (Turkiya)</td>
                                <td>Antaliya</td>
                                <td>31.12.2021</td>
                                <td className="priZak">Прием закрыт</td>
                                <td className="infoTd"><img src={info_icon} alt=""/></td>
                            </tr>
                            <tr>
                                <td className="firstTD">Akdeniz Universiteti (Turkiya)</td>
                                <td>Antaliya</td>
                                <td>31.12.2021</td>
                                <td className="priDoc">Прием документов</td>
                                <td className="infoTd"><img src={info_icon} alt=""/></td>
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
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open}>
                        <div className="addNewUniverModalUniver talaba_modal">
                            <img onClick={handleClose} src={close_modal} alt="" />
                            <div className="modalContainer">
                                <h5>Добавить новый университет</h5>
                                <div>
                                    <label>Название университета</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Название университета</label>
                                    <select>
                                        <option>Выбрать страну</option>
                                        <option>страну</option>
                                        <option>страну</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Название университета</label>
                                    <textarea name="" id="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="modalDataPick">
                                    <label>Прием документов заканчивается</label>
                                    <DatePicker 
                                        selected={startDate} 
                                        onChange={(date) => setStartDate(date)} 
                                        placeholderText="sana"
                                        />
                                </div>
                                <div>
                                    <label>Картинка</label>
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
                            </div>
                        </div>
						</Fade>
					</Modal>
                {/* end Filter */}
            </div>
        </div>
        </Sidebar>
        // end SidebarUniverstitet
    );
}

export default SidebarUniverstitet;