import React from 'react';
import  {useSelector} from 'react-redux'

// import css
import "../../../style/css/dogovor.css"

import download_icon from "../../../assets/icon/skachat.svg"
import print_icon from "../../../assets/icon/pechat.svg"
import StudentSidebar from './SidebarStudent';


const Dogovor = () => {
    const selector  = useSelector(state=> state)
    const {payload} = selector.payload
    const {agreement_docx,agreement_pdf} = payload.data
    console.log(agreement_docx.toString());
    console.log(agreement_pdf);
    return (
        <>
        <StudentSidebar/>
        <div className="dogovor">
            <div className="top">
                <h1>Ваши университеты</h1>
                <div>
                    <img src="https://picsum.photos/70" alt=""/>
                    <h2>Nargiza Akhmedova
                        <span>IT Specialist</span>
                    </h2>
                </div>
            </div>
            <div className="bootm">
                <div className="main">
                    <h4>Dogovor </h4>
                <embed src={agreement_pdf} style={{width:'100%',height:'80vh'}} type="" />
                    {/* <embed src="http://backend.edugateway.uz/media/agreements/55/agreement_55_1632465060.docx" width="500" height="375" 
                       type="application/pdf"/> */}
                    {/* <h1>ДОГОВОР</h1>
                    <h2>на оказание консультационных и маркетинговых услуг
                    </h2>
                    <p className="titleP1">
                        г. ___________
                        <span>
                            "___"__________200_ г.
                        </span>
                    </p>
                    <p className="titleP2">
                        Предприятие, именуемое в дальнейшем "Заказчик" ("Собственник"), в  лице  Генерального  директора _ _ _ _ _ _ _ _,   действующего  на основании  Устава, с  одной стороны и _ _ _ _ _ _ _ _ _ _ _ _ _, именуемое в дальнейшем "Исполнитель",  в лице  Генерального директора _ _ _ _ _ _ _ _ _ _ _ _ _, действующего на основании Устава, заключили настоящий договор о нижеследующем:
                    </p>
                    <h3>1. ПРЕДМЕТ ДОГОВОРА</h3>
                    <p className="titleP3">
                        <span>
                            1.1. Заказчик поручает,  а Исполнительбязуется оказать  услуги по  поиску  и  подбору  организации или частного лица ,  именуемого в дальнейшем "Инвестор",  заинтересованного участвовать в разработке  и реализации инвестиционного  проекта  по  развитию  и  реконструкции    территории  и  (или)  комплекса  зданий,  расположенных  по   адресу: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _,    а    также в любом ином полном или частичном их использовании на условиях, приемлемых для Заказчика (Собственника). Территория, а также комплекс    зданий (здание),  инвестирование в которые  предполагает  осуществить    Собственник, именуются в настоящем Договоре "Объект".
                        </span>
                        <span> 
                            1.2. Заказчик обязуется оплатить услуги Исполнителя в порядке, всрок и на условиях, определенных настоящим Договором.
                        </span>
                        <span>
                             1.3. Для целей настоящего Договора под "инвестиционным проектом"по   развитию   и  реконструкции  Объекта  понимается  проект  (план,программа  и  т.п.)  по  инвестированию   (вложению   инвестиций)   иосуществлению   практических  действий  по  реализации  инвестиций  вконкретных  формах   в   целях   получения   прибыли   и   достиженияположительного   социального  эффекта.  Инвестиционный  проект  можетосуществляться в следующих формах:
                        </span>
                        <span>
                             - частичная реализация имущества Заказчика (в том числе объектовнедвижимости) с целью получения средств для развития Объекта;
                        </span>
                        <span>
                             - сдача Объекта или иного имущества Заказчика в аренду инвесторус условием осуществления реконструкции (развития) Объекта;
                        </span>
                        <span>
                            - прямые  вложения в Объект в целях его последующего совместногоиспользования с инвестором.
                        </span>
                        <span>
                             Помимо перечисленных в настоящем пункте,  могут быть разработаныи другие инвестиционные проекты.
                        </span>
                    </p> */}
                </div>
               
                <div className="print">
                    <button>
                        <img src={download_icon} alt=""/>
                        <a href={agreement_pdf} download> Скачать PDF</a> 
                       
                    </button>
                    <button>
                        <img src={download_icon} alt=""/>
                        <a href={agreement_docx} download> Скачать Word</a> 
                       
                    </button>
                    <button>
                        <img src={print_icon} alt=""/>
                        Напечатать
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dogovor;
