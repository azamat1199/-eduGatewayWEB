import Fakultet from "../containers/consultantBackoffice/pages/Fakultet"
import Login from "../containers/consultantBackoffice/pages/Login"
import LoginStaff from "../containers/consultantBackoffice/pages/LoginStaff"
import SidebarUniverstitet from "../containers/consultantBackoffice/pages/SidebarAgentlar"
import SideGlavny from "../containers/consultantBackoffice/pages/SideGlavny"
import SideStrana from "../containers/consultantBackoffice/pages/SideStrana"
import Dogovor from "../containers/StudentCabinet/pages/dogovor"
import Kabinet from "../containers/StudentCabinet/pages/kabinet"
import Personal from "../containers/StudentCabinet/pages/personal"
import Status from "../containers/StudentCabinet/pages/status"
import Universitet from "../containers/StudentCabinet/pages/universitet"
import StudentCabinet from "../containers/StudentCabinet/studentCabinet"
import Partnyors from "../containers/web/pages/Partnyors"
import SinglePage from "../containers/web/pages/SinglePage"
import Fayli from "../containers/web/pages/singup/Fayli"
import Oplata from "../containers/web/pages/singup/Oplata"
import Oplata2 from "../containers/web/pages/singup/Oplata2"
import Oplata3 from "../containers/web/pages/singup/Oplata3"
import Profayl from "../containers/web/pages/singup/Profayl"
import Profayl2 from "../containers/web/pages/singup/Profayl2"
import Profayl3 from "../containers/web/pages/singup/Profayl3"
import SingUp from "../containers/web/pages/singup/SingUp"
import Zayavka from "../containers/web/pages/singup/Zayavka"
import Web from "../containers/web/web"


const routes = {
    public:[
        {
            key:'university',
            path:'/',
            component:Web,
            exact:true,
        },
        {
            key:'university',
            path:'/partners',
            component:Partnyors,
            exact:true,
        },
        {
            key:'university',
            path:'/university',
            component:SinglePage,
            exact:true,
        },
        {
            key:'clientAdd',
            path:'/registration',
            component:SingUp,
            exact:true,
        },
        {
            key:'balance',
            path:'/login',
            component:Login,
            exact:true,
        },
        {
            key:'balance',
            path:'/loginStaff',
            component:LoginStaff,
            exact:true,
        },
        {
            key:'balance',
            path:'/requisition',
            component:Zayavka,
            exact:true,
        },
        {
            key:'balance',
            path:'/profile',
            component:Profayl,
            exact:true,
        },
        {
            key:'balance',
            path:'/profile2',
            component:Profayl2,
            exact:true,
        },
        {
            key:'balance',
            path:'/profile3',
            component:Profayl3,
            exact:true,
        },
        {
            key:'file',
            path:'/files',
            component:Fayli,
            exact:true,
        },
        {
            key:'file',
            path:'/payment-click',
            component:Oplata,
            exact:true,
        },
        {
            key:'file',
            path:'/payment-payme',
            component:Oplata2,
            exact:true,
        },
        {
            key:'file',
            path:'/payment-transaction',
            component:Oplata3,
            exact:true,
        },
      
    ],
    student:[
        {
            key:'file',
            path:"/my-account",
            component:Kabinet,
            exact:true,
        },
        {
            key:'file',
            path:"/universities",
            component:Universitet,
            exact:true,
        },
        {
            key:'file',
            path:"/personal",
            component:Personal,
            exact:true,
        },
        {
            key:'file',
            path:"/agreement",
            component:Dogovor,
            exact:true,
        },
        {
            key:'file',
            path:"/status",
            component:Status,
            exact:true,
        },
        {
            key:'file',
            path:"/bonus",
            component:()=><h1>Bonus page</h1>,
            exact:true,
        },
        {
            key:'file',
            path:"/settings",
            component:()=><h1>settings page</h1>,
            exact:true,
        },
    ],
       consult:[
        {
            key:'file',
            path:'/home/main',
            component:SideGlavny,
            exact:true,
        },
        {
            key:'file',
            path:"/home/strana",
            component:SideStrana,
            exact:true,
        },
        {
            key:'file',
            path:"/home/universitet",
            component:SidebarUniverstitet,
            exact:true,
        },
        {
            key:'file',
            path:"/home/fakultet",
            component:Fakultet,
            exact:true,
        },
       ],
    authonticated:[
       
    ]
}
export default routes