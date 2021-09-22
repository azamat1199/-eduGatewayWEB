import React, { Component, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import folder_icon from '../../../../assets/icon/folder_icon.svg';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { dispatch } from '../../../../store';
import { SET_DOC } from '../../../../store/actionTypes';
import Axios from '../../../../utils/axios';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

function Fayli() {
  const history = useHistory();
  const [doc, setDoc] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();

  const handleInputChange = (e) => {
    // setData({ data: e.target.files[0] });
  };
  const handleChange = (e) => {
    setDoc({ doc: e.target.files[0] });
  };

  // const userData = JSON.parse(localStorage.getItem('data'));
  // const {
  //   id,
  //   achiev,
  //   active_activity,
  //   budget,
  //   description,
  //   gpa,
  //   school,
  //   select,
  //   sportAchievemnts,
  //   target,
  //   visa,
  // } = userData;
  // console.log(budget);
  // var bodyFormData = new FormData();
  // bodyFormData.append('scan_passport_self', file1);
  // bodyFormData.append('agreement_with_company', file1);
  // bodyFormData.append('scan_diploma', file1);
  // bodyFormData.append('scan_photo', file1);
  // bodyFormData.append('scan_passport_mother_with_residence_permit', file1);
  // bodyFormData.append('cert_marriage', file1);
  // bodyFormData.append('cert_birth', file1);
  // bodyFormData.append('cert_063', file1);
  // bodyFormData.append('cert_086', file1);
  // bodyFormData.append('cert_hivs', file1);
  // bodyFormData.append('enrollee_user', parseInt(id));
  // bodyFormData.append('service', parseInt(id));
  // bodyFormData.append('faculty', parseInt(id));
  // bodyFormData.append('budget', parseInt('3000'));
  // bodyFormData.append('comment', description);
  // bodyFormData.append('english_level_type', 'Ielts');
  // bodyFormData.append('english_level_other', '');
  // bodyFormData.append('english_level_value', select);
  // bodyFormData.append('educated_in', school);
  // bodyFormData.append('achievements', achiev);
  // bodyFormData.append('gpa', gpa);
  // bodyFormData.append('sport_achievements', sportAchievemnts);
  // bodyFormData.append('active_activity', active_activity);
  // bodyFormData.append('visas', visa);
  // bodyFormData.append('education_purpose', target);
  // console.log(userData);
  const submitHandler = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const data = await Axios.put(
    //       `/enrollee/enrollee-profile/${id}`,
    //       bodyFormData,
    //       {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       }
    //     );
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error.response);
    //   }
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
          <h2 className="singup_pass">Профайл</h2>
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
          <h2 className="singup_active2">Файлы</h2>
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
          <h1>Файлы</h1>
          <div className="form_div">
            <p className="long_p">
              *Загружаемый файл не должен превышать 5 Мб, чтобы время загрузки
              было оптимальным. Большие документы должны быть разделены на
              отдельные файлы и помечены как часть 1, часть 2 и т.д. Разрешение
              200dpi, как правило, подходит для черно-белых изображений.
            </p>
          </div>
          <div className="form_div">
            <p>
              Документы об образовании{' '}
              <span>Школьный аттестат, диплом колледжа, вуза.</span>
            </p>
            <div className="importFile">
              <img src={folder_icon} alt="" />
              <p>
                Drop your files here or a
                <input
                  onChange={(e) => setFile1(e.target.files[0])}
                  type="file"
                  id="chFile"
                />
                <label htmlFor="chFile">choose file</label>
              </p>
            </div>
          </div>
          <div className="form_div">
            <p>Сертификаты IELTS, TOEFL, GMAT, SAT</p>
            <div className="importFile">
              <img src={folder_icon} alt="" />
              <p>
                Drop your files here or a
                <input
                  onChange={(e) => setFile2(e.target.files[0])}
                  type="file"
                  id="chFile2"
                />
                <label htmlFor="chFile2">choose file</label>
              </p>
            </div>
          </div>
          <div className="form_div">
            <p>Грамоты и сертификаты</p>
            <div className="importFile">
              <img src={folder_icon} alt="" />
              <p>
                Drop your files here or a
                <input
                  onChange={(e) => setFile3(e.target.files[0])}
                  type="file"
                  id="chFile3"
                />
                <label htmlFor="chFile3">choose file</label>
              </p>
            </div>
          </div>
          <div className="form_div">
            <p>Резюме, эссе, мотивационные и рекомендовательные письма</p>
            <div className="importFile">
              <img src={folder_icon} alt="" />
              <p>
                Drop your files here or a
                <input
                  onChange={(e) => setFile4(e.target.files[0])}
                  type="file"
                  id="chFile4"
                />
                <label htmlFor="chFile4">choose file</label>
              </p>
            </div>
          </div>
          <div className="form_div">
            <p>
              Договор с компанией{' '}
              <span>Документ должен быть подписан заявителем</span>
            </p>
            <div className="importFile">
              <img src={folder_icon} alt="" />
              <p>
                Drop your files here or a
                <input
                  onChange={(e) => setFile5(e.target.files[0])}
                  type="file"
                  id="chFile5"
                />
                <label htmlFor="chFile5">choose file</label>
              </p>
            </div>
          </div>
          <div className="btn_div">
            <button
              type="submit"
              onClick={(e) => submitHandler(e)}
              className="reg_btn"
            >
              Завершить
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Fayli;
