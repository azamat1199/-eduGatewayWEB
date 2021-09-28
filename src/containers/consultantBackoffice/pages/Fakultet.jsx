import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// UI modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// import img
import search_icon from '../../../assets/icon/search.svg';
import settings from '../../../assets/icon/settings.svg';
import close_modal from '../../../assets/icon/close_modal.svg';
import folder_icon from '../../../assets/icon/folder_icon.svg';

// import css
import '../../../style/css/SidebarUniverstitet.css';
import '../../../style/css/fakultet.css';
import Sidebar from './SidebarConsult';
import Axios from '../../../utils/axios';
import arrow1 from '../../../assets/icon/arrow1.svg';

const Fakultet = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState('');
  const [universtitetName, setUniverstitetName] = useState('');
  const [kvota, setKvota] = useState(null);
  const [description, setDescription] = useState('');
  const date = new Date();
  const [nowDate, setNowDate] = useState(date);
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState(null);
  const [fixEnd, setFix] = useState(false);
  const [data, setData] = useState();
  const [univerData, setUniverData] = useState();
  const [facultet, setFacultet] = useState();

  const fetchData = async () => {
    const data = await Axios.get('university/university/');
    const datas = data.data.results;
    setUniverData(datas);

    return data;
  };
  const getFacultet = async () => {
    try {
      const res = await Axios.get('/university/university-faculty/');
      setFacultet(res.data.results.reverse());
    } catch {}
  };
  useEffect(() => {
    fetchData();
    getFacultet();
  }, []);
  console.log(univerData, facultet);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formData = new FormData();
  formData.append('university', data?.university);
  formData.append('major', data?.university);
  formData.append('name', data?.name);
  formData.append('status', data?.status);
  formData.append('education_type', data?.education_type);
  formData.append('quota', data?.quota);
  formData.append('education_fee', 10);
  formData.append('service_price', data?.service_price);

  const submitFaculty = async (e) => {
    try {
      const res = await Axios.post(
        '/university/university-faculty/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    handleClose();
    getFacultet();
  };
  console.log(formData);
  return (
    <Sidebar>
      <div className="asos">
        <div className="Up_navbar">
          <h4>Факультеты</h4>
          <div>
            <img src="https://picsum.photos/70" alt="" />
            <div>
              <h5>Nargiza Akhmedova</h5>
              <p>IT Specialist</p>
            </div>
          </div>
        </div>
        <div className="SidebarUniverstitet">
          <button onClick={handleOpen}>Добавить факультет</button>
          <div className="settSearch">
            <div className="searchUniv">
              <img src={search_icon} alt="" />
              <input type="text" placeholder="Поиск университетов" />
            </div>
            <button
              onClick={() => {
                setFix(!fixEnd);
              }}
              className="settingsUniver"
            >
              <img src={settings} alt="" />
            </button>
          </div>
          {/* end settSearch */}
          <div className="univerList fakultet" id="scroll_bar">
            <table>
              <thead>
                <tr>
                  <th className="firstTD">Название</th>
                  <th>ВУЗ</th>
                  <th>Квоты</th>
                  <th>Статус</th>
                  <th>Сумма контракта</th>
                  <th>Тип учёбы</th>
                  <th>Цена за услуги</th>
                </tr>
              </thead>
              <tbody>
                {facultet?.map((iteam) => {
                  const {
                    university,
                    major,
                    name,
                    status,
                    education_fee,
                    education_type,
                    quota,
                    service_price,
                  } = iteam;

                  return (
                    <tr>
                      <td className="firstTD">{name}</td>
                      <td>
                        {univerData?.map((univer) => {
                          if (university == univer?.id) {
                            return <p>{univer?.name}</p>;
                          }
                        })}
                      </td>
                      <td>{quota}</td>
                      <td
                        className="priDoc"
                        style={{ color: status == 'close' && 'red' }}
                      >
                        {(status == 'open' && '	Прием документов') ||
                          '	Прием закрыт'}
                      </td>
                      <td>${service_price}</td>
                      <td>
                        {(education_type == 'full_time' && 'Очный') ||
                          'Заочный'}
                      </td>
                      <td>$450</td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="firstTD">Экономика и международный бизнес</td>
                  <td>
                    Южно Казахтанский Государственный Педогогиский Университет
                  </td>
                  <td>1,500</td>
                  <td className="priDoc">Прием документов</td>
                  <td>$34,500</td>
                  <td>Очный</td>
                  <td>$450</td>
                </tr>

                <tr>
                  <td className="firstTD">
                    Business Management and Hotel Management
                  </td>
                  <td>Sakarya University</td>
                  <td>1,500</td>
                  <td className="priZak">Прием закрыт</td>
                  <td>$34,500</td>
                  <td>Заочный</td>
                  <td>$450</td>
                </tr>
                <tr>
                  <td className="firstTD">Экономика и международный бизнес</td>
                  <td>
                    Южно Казахтанский Государственный Педогогиский Университет
                  </td>
                  <td>1,500</td>
                  <td className="priDoc">Прием документов</td>
                  <td>$34,500</td>
                  <td>Очный</td>
                  <td>$450</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* end univerList */}
          {/* Filter */}
          {
            // fixEnd ?
            fixEnd === true ? (
              <div className="FilterFix">
                <div
                  className="fixLeft"
                  onClick={() => {
                    setFix(!fixEnd);
                  }}
                ></div>
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
            ) : null
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
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className="addNewUniverModalUniver talaba_modal">
                <img onClick={handleClose} src={close_modal} alt="" />
                <div className="modalContainer">
                  <h5>Добавить новый университет</h5>
                  <div>
                    <label>Университет</label>
                    <select name="type" onChange={(e) => handleInputChange(e)}>
                      <option>Бакалави</option>
                      <option>магистр</option>
                      <option>Докторантура </option>
                    </select>
                  </div>
                  <div>
                    <label>Название факультет</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div>
                    <label>Университет</label>
                    <select
                      name="university"
                      onChange={(e) => handleInputChange(e)}
                    >
                      {univerData?.map((value) => {
                        return (
                          <option value={value.id} key={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label>Квота</label>
                    <input
                      name="quota"
                      type="text"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div>
                    <label>Описание</label>
                    <textarea
                      name="description"
                      id=""
                      cols="30"
                      rows="5"
                      onChange={(e) => handleInputChange(e)}
                    ></textarea>
                  </div>
                  {/* <div className="modalDataPick">
                    <label>Прием документов заканчивается</label>
                    <DatePicker
                      selected={nowDate}
                      name=""
                      onChange={(e) => setNowDate(e)}
                      placeholderText="sana"
                    />
                  </div> */}
                  <div>
                    <label>Тип учёбы</label>
                    <select
                      name="education_type"
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="full_time"> Очный</option>
                      <option value="part_time">Заочный</option>
                    </select>
                  </div>
                  <div>
                    <label>Статус</label>
                    <select
                      name="status"
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="open">Прием документов</option>
                      <option value="close">Прием закрыт</option>
                    </select>
                  </div>
                  <div>
                    <label>Цена</label>
                    <input
                      name="service_price"
                      type="text"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>

                  <button
                    onClick={(e) => {
                      submitFaculty(e);
                    }}
                  >
                    Добавить
                  </button>
                  <button onClick={handleClose} className="back_btn">
                    <img src={arrow1} alt="" /> Вернуться
                  </button>
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
};

export default Fakultet;
