import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// import img
import search_icon from '../../../assets/icon/search.svg';
import settings from '../../../assets/icon/settings.svg';
import info_icon from '../../../assets/icon/info_icon.svg';
import close_modal from '../../../assets/icon/close_modal.svg';
import folder_icon from '../../../assets/icon/folder_icon.svg';
import pencil from '../../../assets/icon/pencil.svg';
import doc from '../../../assets/icon/doc.svg';
import delet from '../../../assets/icon/delet1.svg';
// import css
import '../../../style/css/SidebarUniverstitet.css';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './SidebarConsult';
import Axios from '../../../utils/axios';
import Swal from 'sweetalert2';
import arrow1 from '../../../assets/icon/arrow1.svg';
const SidebarUniverstitet = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [fixEnd, setFix] = useState(false);

  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [founding_year, setFoundingYear] = useState();
  const inputEl1 = useRef(null);
  const [univerData, setUniverData] = useState({});
  // const [file, setFile] = useState();
  const [open_change, setOpen_change] = React.useState(false);
  const [contry, setContry] = useState([]);
  const [id, setId] = useState();
  const [data, setData] = useState();
  const fetchData = async () => {
    const data = await Axios.get('university/university/');
    setUniverData(data);
    return data;
  };

  const getContry = async () => {
    try {
      const res = await Axios.get('common/country/');
      const { results } = res.data;
      // console.log(results);
      setContry(results);
      return res;
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
    getContry();
  }, []);
  // console.log(contry);
  const handleOpen_change = () => {
    setOpen_change(true);
  };
  const handleClose_change = () => {
    setOpen_change(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData((state) => ({ ...state, [name]: files[0] }));
    console.log(data);
  };
  // console.log(data);
  const formData = new FormData();
  formData.append('name', data?.name);
  formData.append('description', data?.description);
  formData.append('city', 1);
  formData.append('location', data?.location);
  formData.append('rating', 5);
  formData.append('rating_source', data?.name);
  formData.append('education_quality', 5);
  formData.append('education_fee_per_annum', 6000);
  formData.append('bachelor_degree_fee_per_annum', 6000);
  formData.append('masters_degree_fee_per_annum', 6000);
  formData.append('living_price_per_annum', 6000);
  formData.append('application_status', true);
  formData.append('faculties', true);
  formData.append('images', inputEl1?.current?.files[0]);
  const submitUniverstet = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/university/university/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status == 200) {
        Swal.fire({
          icon: 'success',
          text: 'Success',
          showCancelButton: false,
        });
      }
    } catch (err) {
      if (err.response.status == 500)
        Swal.fire({
          icon: 'error',
          text: 'Server Error',
          showCancelButton: true,
        });
    }
    fetchData();
    handleClose();
  };
  const edit = async (id) => {
    handleOpen_change();
    try {
      const res = await Axios.get(`university/university/${id}`);
      const { name, location, description, founding_year } = res.data;
      setId(id + 1);
      setName(name);
      setLocation(location);
      setDescription(description);
      setFoundingYear(parseInt(founding_year));
    } catch (error) {
      if (error.status == 500)
        Swal.fire({
          icon: 'error',
          text: 'Server Errror',
          showCancelButton: true,
        });
      // console.log(error);
    }
  };
  const setEdit = async (id) => {
    try {
      const res = await Axios.patch(`/university/university/${id}`, formData);
    } catch (error) {}
    handleClose_change();
    fetchData();
  };
  console.log(inputEl1?.current?.files[0]);
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
          <div className="univerList">
            <table>
              <thead>
                <tr>
                  <th className="px-3">N</th>
                  <th className="firstTD">Название</th>
                  <th>Город</th>
                  <th>Срок</th>
                  <th>Статус</th>
                  <th className="infoTd">Информация</th>
                </tr>
              </thead>
              <tbody>
                {univerData?.data?.results?.reverse().map((v, i) => {
                  return (
                    <tr key={v.name}>
                      <td className="px-3">{v.id}</td>
                      <td className="firstTD">{v.name}</td>
                      <td>Antaliya</td>
                      <td>{v.founding_year}</td>
                      <td className="priDoc">Прием докуметов</td>
                      <td className="infoTd">
                        <img src={info_icon} alt="" className="me-5" />
                        <img
                          src={pencil}
                          onClick={(e) => edit(v.id)}
                          alt=""
                          width="28"
                          className="ms-5"
                        />
                      </td>
                    </tr>
                  );
                })}
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
                      <option>Tashkent</option>
                      <option>Istabul</option>
                      <option>Maskiva</option>
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
                    <label>Название университета</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div>
                    <label>Страна</label>
                    <select value={location}>
                      <option>Выбрать страну</option>
                      <option>страну</option>
                      <option>страну</option>
                    </select>
                  </div>

                  <div>
                    <label>Город</label>
                    <select value={location}>
                      <option>Выбрать страну</option>
                      <option>страну</option>
                      <option>страну</option>
                    </select>
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
                  <div className="modalDataPick">
                    <label>Прием документов заканчивается</label>
                    <DatePicker
                      selected={founding_year}
                      onChange={(e) => setFoundingYear(e)}
                      placeholderText="sana"
                    />
                  </div>
                  <div>
                    <label>Картинка</label>
                    <div className="import">
                      <img src={folder_icon} alt="" />
                      <p>
                        Drop your files here or a
                        <input
                          type="file"
                          id="chFile"
                          ref={inputEl1}
                          onChange={(event) => handleFileChange(event)}
                        />
                        <label htmlFor="chFile">choose file</label>
                      </p>
                    </div>
                  </div>
                  <button onClick={(event) => submitUniverstet(event)}>
                    Добавить
                  </button>
                  <button onClick={handleClose} className="back_btn">
                    <img src={arrow1} alt="" /> Вернуться
                  </button>
                </div>
              </div>
            </Fade>
          </Modal>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="class1"
            open={open_change}
            onClose={handleClose_change}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open_change}>
              <div className="addNewUniverModalUniver talaba_modal">
                <img onClick={handleClose_change} src={close_modal} alt="" />
                <div className="modalContainer">
                  <h5>Добавить новый университет</h5>
                  <div>
                    <label>Название университета</label>
                    <input
                      value={name}
                      name="name"
                      type="text"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div>
                    <label>Страна</label>
                    <select
                      value={location}
                      // onChange={(e) => handleInputChange(e)}
                    >
                      <option>Выбрать страну</option>
                      <option>страну</option>
                      <option>страну</option>
                    </select>
                  </div>

                  <div>
                    <label>Город</label>
                    <select value={location}>
                      <option>Выбрать страну</option>
                      <option>страну</option>
                      <option>страну</option>
                    </select>
                  </div>
                  <div>
                    <label>Описание</label>
                    <textarea
                      name="description"
                      id=""
                      cols="30"
                      rows="5"
                      value={description}
                      onChange={(e) => handleInputChange(e)}
                    ></textarea>
                  </div>
                  <div className="modalDataPick">
                    <label>Прием документов заканчивается</label>
                    <DatePicker
                      selected={founding_year}
                      onChange={(e) => setFoundingYear(e)}
                      placeholderText="sana"
                    />
                  </div>
                  <div>
                    <label>Картинка</label>
                    <div className="importFile">
                      <img src={folder_icon} alt="" />
                      <p>
                        Drop your files here or a
                        <input
                          type="file"
                          id="chFile"
                          ref={inputEl1}
                          onChange={(event) => handleFileChange(event)}
                        />
                        <label htmlFor="chFile">choose file</label>
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setEdit(id)}>Добавить</button>
                  <button onClick={handleClose_change} className="back_btn">
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

export default SidebarUniverstitet;
