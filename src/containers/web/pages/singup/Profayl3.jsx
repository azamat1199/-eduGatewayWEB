import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Navbar from '../Navbar';

const dataT = require('../../json/data.json');

function Profayl3() {
  const history = useHistory();
  const [data, setData] = useState(dataT);
  const [activity, setActivity] = useState();
  const [profileData, setProfileData] = useState({
    sportAchievemnts: '',
    visa: '',
    target: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((state) => ({ ...state, [name]: value }));
  };
  const finalData = {
    sportAchievemnts: profileData.sportAchievemnts,
    visa: profileData.visa,
    target: profileData.target,
    active_activity: activity,
  };
  // const userData = JSON.parse(localStorage.getItem('data'));
  // const datas = { ...finalData, ...userData };
  // console.log(datas);
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('data', JSON.stringify(datas));
    history.push('/files');
  };

  return (
    <React.Fragment>
      <div className="navRegist">
        <Navbar />
      </div>
      <div className="singup_asos container">
        <div className="nav_name">
          <h1>Процесс поступления</h1>
        </div>
        <div className="up_nav">
          <h2 className="singup_pass">Регистрация/Войти</h2>
          <svg
            id="svg_pass"
            width="82"
            height="10"
            viewBox="0 0 82 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z"
              fill="#5C7C8A"
            />
          </svg>
          <h2 className="singup_pass">Заявка</h2>
          <svg
            id="svg_pass"
            width="82"
            height="10"
            viewBox="0 0 82 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z"
              fill="#5C7C8A"
            />
          </svg>
          <h2 className="singup_active3">Профайл</h2>
          <svg
            width="82"
            height="10"
            viewBox="0 0 82 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z"
              fill="#5C7C8A"
            />
          </svg>
          <h2>Файлы</h2>
          <svg
            width="82"
            height="10"
            viewBox="0 0 82 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82 5L74.5 0.669873V9.33013L82 5ZM0 5.75H5.125V4.25H0V5.75ZM15.375 5.75H25.625V4.25H15.375V5.75ZM35.875 5.75H46.125V4.25H35.875V5.75ZM56.375 5.75H66.625V4.25H56.375V5.75Z"
              fill="#5C7C8A"
            />
          </svg>
          <h2>Оплата</h2>
        </div>
        <form className="main_singup">
          <h1>Профайл</h1>
          <div className="pagination">
            <a className="page page_a"></a>
            <a className="page page_a"></a>
            <div className="page page_a"></div>
          </div>
          <div className="form_div">
            <p>Спортивные достижения</p>
            <input
              type="text"
              onChange={handleChange}
              name="sportAchievemnts"
            />
          </div>
          <div className="form_div">
            <p>Активная деятельность</p>
            <Autocomplete
              id="profayl_input"
              onInputChange={(newInputValue) =>
                setActivity(newInputValue.target.innerText)
              }
              options={data}
              getOptionLabel={(option) => option.hobbi}
              style={{ width: 575 }}
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" />
              )}
            />
          </div>
          <div className="form_div">
            <p>Визы</p>
            <input type="text" onChange={handleChange} name="visa" />
          </div>
          <div className="form_div">
            <p>Цель получения образования</p>
            <input type="text" onChange={handleChange} name="target" />
          </div>
          <div className="btn_div">
            <button onClick={handleSubmit} className="reg_btn">
              Завершить
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Profayl3;
