import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import arrowright from '../../../../assets/icon/arrowright.svg';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Slider from '@material-ui/core/Slider';
import NumberFormat from 'react-number-format';
import Navbar from '../Navbar';

const data = require('../../json/data.json');
const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 200,
    label: '$200',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 800,
    label: '$800',
  },
  {
    value: 1000,
    label: '$1000',
  },
  {
    value: 2000,
    label: '$2000',
  },
  {
    value: 3000,
    label: '$3000+',
  },
];
const SSlider = withStyles({
  root: {
    color: '#00587F',
    height: 15,
  },
  thumb: {
    height: 45,
    width: 45,
    backgroundColor: '#E5F7FF',
    border: '6px solid currentColor',
    marginTop: -17,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 3px)',
  },
  track: {
    height: 15,
    borderRadius: 7,
  },
  rail: {
    height: 15,
    borderRadius: 7,
    backgroundColor: '#cdeefce8',
  },
})(Slider);

function Zayavka() {
  const history = useHistory();
  const [faculty, setUniversity] = useState();
  const [comment, setDiscription] = useState();
  const [value, setValue] = useState(1);
  const [requisiton, setRequisition] = useState({
    budget: 0,
  });
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setRequisition((state) => ({ ...state, [name]: +value.trim() }));
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleUniver = (event, newValue) => {
    if(newValue){
      const { id } = newValue;
      setUniversity(id);
    }
  };
  // const enrollee_user = JSON.parse(localStorage.getItem('data')).id;
  // console.log(enrollee_user);
  const finalData = {
    enrollee_user:1,
    faculty:1,
    budget: 3000,
    comment,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(finalData);
  };
  const localStr = () => {
    localStorage.setItem('zayavka', JSON.stringify(finalData));
  };
  console.log(finalData);
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
          <h2>Профайл</h2>
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
        <form onSubmit={handleSubmit} className="main_singup">
          <h1>Заявка</h1>
          <div className="form_div">
            <p>Услуги Education Gateway</p>
            <Autocomplete
              aria-required
              onChange={handleUniver}
              id="combo-box-demo"
              options={data}
              getOptionLabel={(option) => option.univer}
              style={{ width: 600 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  variant="outlined"
                  placeholder="Поиск академических программ"
                />
              )}
            />
          </div>
          <div className="form_div">
            <p>Комментарии</p>
            <textarea
              required
              value={comment}
              onChange={(e) => setDiscription(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Оставьте комментарии или предложения"
            ></textarea>
          </div>
          <div className="line_dash"></div>
          <h4>Ваш бюджет</h4>
          <input
            required
            name="budget"
            onChange={handleInputChange}
            //  value={requisiton.budget ? requisiton.budget : value}
            className="input_budjet"
            placeholder="$0"
          />
          {/* <input className="input_budjet" type="text" /> */}
          <div className="form_div input_range">
            <SSlider
              defaultValue={0}
              value={value}
              max={3000}
              onChange={handleChange}
              step={10}
              marks={marks}
              valueLabelDisplay="on"
              valueLabelFormat={''}
            />
          </div>
          <p className="zayavka_alert">
            *Пожалуйста укажите ваш реальный бюджет
          </p>
          <NavLink onClick={localStr} to="/profile2" className="reg_btn">
            Следующее <img src={arrowright} alt="" />
          </NavLink>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Zayavka;
