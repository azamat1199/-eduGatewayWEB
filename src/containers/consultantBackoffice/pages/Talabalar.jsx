import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import img
import search_icon from '../../../assets/icon/search.svg';
import settings from '../../../assets/icon/settings.svg';
import close_modal from '../../../assets/icon/close_modal.svg';
import folder_icon from '../../../assets/icon/folder_icon.svg';
import pencil from '../../../assets/icon/pencil.svg';
import doc from '../../../assets/icon/doc.svg';
import delet from '../../../assets/icon/delet1.svg';
import arrow1 from '../../../assets/icon/arrow1.svg';
// import css
import '../../../style/css/SidebarUniverstitet.css';
import '../../../style/css/fakultet.css';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './SidebarConsult';
import Axios from '../../../utils/axios';
import Item from 'antd/lib/list/Item';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { SET_DOC } from '../../../store/actionTypes';
import { dispatch } from '../../../store';
import { Pagination } from '@material-ui/lab';
const Talabalar = () => {
  const [students, setStudents] = useState([]);
  const [studentGetById, setStudentGetById] = useState({});
  const [studentPostById, setStudentPostById] = useState({});
  const [chek, setChek] = useState(false);
  const [univerData, setUniverData] = useState();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [phone, setPhone] = useState('');
  const [universtitetName, setUniverstitetName] = useState('');
  const [nameFaculties, setNameFaculties] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState(null);
  const [country, setContry] = useState();
  const [facultetId, setFacultetId] = useState();
  const [univerId, setUniverId] = useState();
  const [founding_year, setFoundingYear] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((state) => ({ ...state, [name]: value }));
    // const idCountry = data?.country;
    // console.log(idCountry, country[idCountry - 1]);
    // setCity(country[idCountry - 1]);
  };
  // modal
  const [open_change, setOpen_change] = React.useState(false);
  const [fixEnd, setFix] = useState(false);
  const history = useHistory();
  const year = founding_year?.getFullYear();
  const month = founding_year?.getMonth();
  const day = founding_year?.getDate();
  const date = year + '-' + month + '-' + day;
  console.log();
  const formData = new FormData();
  formData.append('first_name', data?.first_name);
  formData.append('middle_name', data?.middle_name);
  formData.append('last_name', data?.last_name);
  formData.append('phone_number', data?.phone_number);
  formData.append('birthday', date);
  formData.append('passport_number', data?.passport_number);
  formData.append('citizenship', data?.country);
  formData.append('city', data?.country);
  formData.append('address', '65465465446');
  formData.append('ref_code', 5555);
  formData.append('agree_with_agreement', chek);
  formData.append('password_1', data?.password_1);
  formData.append('password_2', data?.password_1);
  console.log(founding_year?.toLocaleDateString('en-US'));
  const fethcStudents = async () => {
    try {
      const res = await Axios.get('enrollee/enrollee-user/');
      console.log(res);
      const { status, data } = res;
      const { results } = data;
      if (status === 200) {
        setStudents(results);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const fetchUniverData = async () => {
    try {
      const data = await Axios.get('university/university/');

      setUniverData(data.data.results);
    } catch (error) {}

    return data;
  };
  const getUniverId = (e) => {
    const { value, name } = e.target;
    setUniverId((state) => ({ ...state, [name]: value }));
  };
  const getContry = async () => {
    try {
      const res = await Axios.get('common/country/');
      const { results } = res.data;
      setContry(results);
      return res;
    } catch (error) {}
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen_change = () => {
    setOpen_change(true);
  };
  const handleClose_change = () => {
    setOpen_change(false);
  };
  useEffect(() => {
    fethcStudents();
    fetchUniverData();
    getContry();
  }, []);
  console.log(univerData, univerId?.university, 'salom');
  const edit = async (id) => {
    handleOpen_change();
    try {
      const res = await Axios.get(`enrollee/enrollee-user/${id}`);
      setStudentGetById(res.data);
      const { first_name, last_name, middle_name, phone_number } = res.data;
      setName(first_name);
      setLastName(last_name);
      setMiddleName(middle_name);
      setPhone(phone_number);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };
  const setEdit = async (e, id) => {
    e.preventDefault();
    try {
      const res = await Axios.patch(`enrollee/enrollee-user/${id}`, {
        first_name: name,
        last_name: lastName,
        middle_name: middleName,
        phone_number: parseInt(phone),
        email: null,
        city: null,
        password_1: password,
        password_2: password,
        registration_ref: null,
      });
      Swal.fire({
        icon: 'success',
        text: 'Успешно зарегистрирован',
        showCancelButton: false,
      });
    } catch (error) {
      if (error.status == 500)
        Swal.fire({
          icon: 'error',
          text: 'Server Errror',
          showCancelButton: true,
        });
    }
    fethcStudents();
    handleClose_change();
  };
  const setStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('enrollee/enrollee-user/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        icon: 'success',
        text: 'Успешно зарегистрирован',
        showCancelButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'На этот номер все готовы зарегистрироваться, выберите другой или войдите',
        showCancelButton: true,
      });
      console.log(error);
    }
    handleClose();
    fethcStudents();
  };
  const setDoc = async (id) => {
    try {
      const res = await Axios.get(`enrollee/enrollee-user/${id}`);
      setStudentGetById(res.data);
      const { first_name, last_name, middle_name, phone_number } = res.data;
      console.log(res.data);
      const userData = {
        id: id,
      };
      localStorage.setItem('data', JSON.stringify(userData));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // console.log(id);
    const action = { type: SET_DOC, payload: { id: id } };
    dispatch(action);
    history.push('/requisition');
  };
  // modal
  return (
    <Sidebar>
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
          <button onClick={handleOpen}>Добавить студента</button>
          <div className="settSearch">
            <div className="searchUniv">
              <img src={search_icon} alt="" />
              <input type="text" placeholder="Поиск Студенты" />
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
          <div className="univerList talabalar" id="scroll_bar">
            <table>
              <thead>
                <tr>
                  <th className="px-3">N</th>
                  <th className="firstTD">ФИО</th>
                  <th>Факультет</th>
                  <th>Университет</th>
                  <th>Номер телефона</th>
                  <th>Номер контракта</th>
                  <th>Дата контракта</th>
                  <th>Оплата за услуги</th>
                  <th>Филиал</th>
                  <th>Реферал</th>
                  <th>Статус</th>
                  <th>Менеджер</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students?.reverse().map((item, i) => {
                  const {
                    id,
                    first_name,
                    last_name,
                    phone_number,
                    documents_filled,
                  } = item;
                  console.log(documents_filled);
                  return (
                    <tr key={id}>
                      <td className="px-3">{i + 1}</td>
                      <td className="firstTD">
                        {first_name} - {last_name}
                      </td>
                      <td>Business Management</td>
                      <td>Harvard University</td>
                      <td>{phone_number}</td>
                      <td>2021/1637</td>
                      <td>07/15/2021 </td>
                      <td>$12,000</td>
                      <td>Ташкент</td>
                      <td>1895</td>
                      {(documents_filled && (
                        <td className="text-success">Принят</td>
                      )) || <td className="text-danger">Принят</td>}
                      <td>Sabina Sabirova</td>
                      <td>
                        <button onClick={() => edit(id)}>
                          <img
                            src={pencil}
                            alt=""
                            width="28"
                            className="me-5"
                          />
                        </button>
                        <button>
                          <img
                            src={doc}
                            alt=""
                            onClick={() => setDoc(id)}
                            width="28"
                            className="ms-5"
                          />
                        </button>
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
          {/* modal one */}
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
              <div
                className="addNewUniverModalUniver talaba_modal"
                id="scroll_bar"
              >
                <img onClick={handleClose} src={close_modal} alt="" />
                <div className="modalContainer">
                  <h5>Добавить нового студента</h5>
                  <div>
                    <label>Ваша имя</label>
                    <input
                      type="text"
                      name="first_name"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>
                  <div>
                    <label>Ваша фамилия</label>
                    <input
                      type="text"
                      name="middle_name"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>
                  <div>
                    <label>Отчество</label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>

                  <div>
                    <label>Страна</label>
                    <select
                      name="country"
                      onChange={(e) => handleInputChange(e)}
                    >
                      {country?.map((value) => {
                        const { name, id } = value;
                        return (
                          <option key={id} value={id}>
                            {name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label>Университет</label>
                    <select name="university" onChange={(e) => getUniverId(e)}>
                      {univerData?.map((value, i) => {
                        return (
                          <option value={value.id} key={value.id}>
                            {value.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label>Название факультет</label>
                    <select name="university" onChange={(e) => getUniverId(e)}>
                      {univerData?.map((value, i) => {
                        if (univerId?.university == value.id) {
                          console.log(value, 'alik');
                          return value?.faculties?.map((v) => {
                            return (
                              <option value={v.name} key={v.id}>
                                {v.name}
                              </option>
                            );
                          });
                        }
                      })}
                    </select>
                  </div>
                  <div>
                    <label>номер и серия паспорта</label>
                    <input
                      type="text"
                      name="passport_number"
                      placeholder="AA0000000"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>
                  <div className="modalDataPick">
                    <label>день рождения</label>
                    <DatePicker
                      selected={founding_year}
                      onChange={(e) => setFoundingYear(e)}
                      placeholderText="sana"
                    />
                  </div>
                  <div>
                    <label>Номер телефона</label>
                    <input
                      type="text"
                      name="phone_number"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>
                  <div>
                    <label>Пароль</label>
                    <input
                      type="password"
                      name="password_1"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-start">
                    <input
                      type="checkbox"
                      className="d-block"
                      name="vehicle1"
                      name="agree_with_agreement"
                      className="d-block"
                      onChange={() => {
                        setChek((chek) => !chek);
                      }}
                    />
                    <label className="d-block">согласен с соглашением</label>
                  </div>

                  <button
                    onClick={(e) => {
                      setStudent(e);
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

          {/* Modal two */}
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
              <div
                className="addNewUniverModalUniver talaba_modal"
                id="scroll_bar"
              >
                <img onClick={handleClose_change} src={close_modal} alt="" />
                <div className="modalContainer">
                  <h5>Изменить</h5>
                  <div>
                    <label>Ваша имя</label>
                    <input
                      type="text"
                      name="first_name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label>Ваша фамилия</label>
                    <input
                      value={lastName}
                      name="last_name"
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label>Отчество</label>
                    <input
                      type="text"
                      name="middle_name"
                      value={middleName}
                      onChange={(e) => {
                        setMiddleName(e.target.value);
                      }}
                    />
                  </div>
                  <button onClick={(e) => setEdit(e, studentGetById.id)}>
                    Добавить
                  </button>
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

export default Talabalar;
