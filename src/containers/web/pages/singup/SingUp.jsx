import React, { Component, useState, useCallback, useRef } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import google from "../../../../assets/icon/google.svg";
import facebook from "../../../../assets/icon/facebookreg.svg";
import view from "../../../../assets/icon/view.svg";
import check from "../../../../assets/icon/checked.svg";
import "../../../../style/css/singup.css";
import Navbar from "../Navbar";
import InputErrorMsg from "./inputErrorMsg";
import Axios from "../../../../utils/axios";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Loader from "react-js-loader";
import { Spin, message } from "antd";

function SingUp() {
  const history = useHistory();
  const inputRef = useRef();
  const buttonRef = useRef();
  const statsuRef = useRef();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(true);
  const [error, setError] = useState("");
  const [length, setLength] = useState();
  const [status, setStatus] = useState("");
  const [loginData, setLoginData] = useState({
    first_name: "",
    last_name: "",
    password_1: "",
    password_2: "",
    phone_number: '',
  });

  const handleInputChange = useCallback(
    (e) => {
      console.log(e);
      const { name, value } = e.target;
      setLoginData((state) => ({ ...state, [name]: value }));
      if (name === "password_1" && !value.length) {
        setStatus("error");
        setLength(0);
      } else if (name === "password_1" && value.length < 2) {
        setStatus("error");
        setLength(12.5);
      } else if (name === "password_1" && value.length < 3) {
        setStatus("error");
        setLength(25);
      } else if (name === "password_1" && value.length < 4) {
        setStatus("error");
        setLength(37.5);
      } else if (name === "password_1" && value.length < 5) {
        setStatus("error");
        setLength(50);
      } else if (name === "password_1" && value.length < 6) {
        setStatus("error");
        setLength(62.5);
      } else if (name === "password_1" && value.length < 8) {
        const { current } = inputRef;
        current.style = "background:red";
        setStatus("error");
        setLength(75);
      } else if (name === "password_1" && value.length == 8) {
        setStatus("success");
        setLength(100);
      }
    },
    [loginData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post("/student/auth/register", loginData);
      const { status } = res;
      const { data } = res;
      if (status == 201) {
        history.push("/requisition");
      }
      console.log(data);
      setLoading(false);
    } catch (err) {
      const { error } = err.response?.data;
      console.log(error[0]?.error[0]);
      setError(error[0]?.error[0]);
      setLoading(false);
    }
  };

  console.log(error);
  console.log(inputRef);
  console.log(status);
  console.log(loginData);

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
          <h2 className="singup_active1">Регистрация/Войти</h2>
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
          <h2>Заявка</h2>
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
          <h1>Регистрация</h1>
          <div className="form_div">
            <p>Ваша имя </p>
            <input
              onChange={handleInputChange}
              type="text"
              name="first_name"
              placeholder="имя"
              required
            />
            <InputErrorMsg type="first_name" errorObj={error} />
          </div>
          <div className="form_div">
            <p>Ваша фамилия</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="last_name"
              placeholder="фамилия"
              required
            />
            <InputErrorMsg type="last_name" errorObj={error} />
          </div>
          <div className="form_div">
            <p>Ваш телефон номера</p>
            <input
              type="phone"
              onChange={handleInputChange}
              name="phone_number"
              placeholder="+998 90 123 45 67"
              required
            />
          </div>
          <div className="form_div">
            <p>Выберите пароль</p>

            <div className="password">
              <input
                onChange={handleInputChange}
                name="password_1"
                required
                placeholder="пароль"
                ref={inputRef}
                type={type ? "password" : "text"}
              />
              <img onClick={() => setType(() => !type)} src={view} alt="" />
            </div>
            <div
              style={
                loginData.password_1.length > 0
                  ? { display: "flex" }
                  : { display: "none" }
              }
              ref={statsuRef}
              className="status-bar"
            >
              <Progress ref={inputRef} percent={length} status={status} />
              {loginData.password_1.length < 8 ? (
                <div style={{ marginLeft: "20px" }} className="statusPercent">
                  <div>
                    {" "}
                    <span style={{ color: "red" }}>
                      {loginData.password_1.length}/
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "red",
                      }}
                    >
                      8
                    </span>{" "}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="form_div">
            <p>Повторите пароль</p>
            <div className="password">
              <input
              placeholder="подтвердить пароль"
                onClick={() =>
                  loginData.password_1.length >= 8 > 0
                    ? (statsuRef.current.style = "display:none;")
                    : ""
                }
                onChange={handleInputChange}
                type="password"
                name="password_2"
                required
              />
              {loginData.password_1 == loginData.password_2 &&
              loginData.password_2 != "" ? (
                <img src={check} alt="" />
              ) : loginData.password_2.length > 0 ? (
                <Loader type="box-up" bgColor={"black"} size={40} />
              ) : (
                ""
              )}
            </div>
          </div>

          <p style={{ color: "red", marginBottom: "8px", fontWeight: "600" }}>
            {" "}
            {error}
          </p>
          <button
            ref={buttonRef}
            style={
              loading ? { background: "#8cb4c5" } : { background: "#00587F" }
            }
            className="reg_btn"
          >
            {loading ? (
              <>
                <Spin size="middle" spinning={loading} />
              </>
            ) : (
              "Зарегистрироваться"
            )}
          </button>
          <h2>или</h2>
          <h2>Войдите через</h2>
          <a className="reg_link" href="#">
            <img src={google} alt="" /> Google
          </a>
          <a className="reg_link" href="#">
            <img src={facebook} alt="" /> Facebook
          </a>
          <h3>
            Уже есть аккаунт? <NavLink to="/login">Войдите</NavLink>
          </h3>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SingUp;
// 111
