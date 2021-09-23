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
import exel from '../../../assets/icon/excel.svg';
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
const Document = () => {
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [studentGetById, setStudentGetById] = useState({});
  const [studentPostById, setStudentPostById] = useState({});
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
  // modal
  const [open_change, setOpen_change] = React.useState(false);
  const [fixEnd, setFix] = useState(false);
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
  }, []);
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
      const res = await Axios.post('enrollee/enrollee-user/', {
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
          <h4>Документы</h4>
          <div>
            <img src="https://picsum.photos/70" alt="" />
            <div>
              <h5>Nargiza Akhmedova</h5>
              <p>IT Specialist</p>
            </div>
          </div>
        </div>

        <div className="SidebarUniverstitet">
          <button onClick={handleOpen}>
            <img src={exel} alt="" /> Excel
          </button>
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
          <div className="univerList " id="scroll_bar">
            <h4 className="fw-bold mb-5">Список документов</h4>
            <table>
              <thead>
                <tr>
                  <th className="px-3">N</th>
                  <th className="firstTD">ФИО</th>
                  <th>Загруженные документы</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {students.reverse().map((item, i) => {
                  const { id, first_name, last_name, phone_number } = item;
                  return (
                    <tr
                      key={id}
                      onClick={() => history.push('documents/user')}
                      style={{ cursor: 'pointer' }}
                    >
                      <td className="px-3">{i + 1}</td>
                      <td className="firstTD">
                        {first_name} - {last_name}
                      </td>
                      <td>8</td>
                      <td style={{ color: 'red' }}>Не потверждён</td>
                    </tr>
                  );
                })}
              </tbody>
              {/* <Stack spacing={2}>
                <Pagination count={10} color="secondary" />
              </Stack> */}
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
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Ваша фамилия</label>
                    <input
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
                      onChange={(e) => {
                        setMiddleName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Номер телефона</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Пароль</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
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

export default Document;
