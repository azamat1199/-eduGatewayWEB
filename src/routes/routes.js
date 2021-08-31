import Fakultet from "../containers/consultantBackoffice/pages/Fakultet"
import Login from "../containers/consultantBackoffice/pages/Login"
import LoginStaff from "../containers/consultantBackoffice/pages/LoginStaff"
import SidebarUniverstitet from "../containers/consultantBackoffice/pages/SidebarAgentlar"
import SideGlavny from "../containers/consultantBackoffice/pages/SideGlavny"
import SideStrana from "../containers/consultantBackoffice/pages/SideStrana"
import StudentCabinet from "../containers/StudentCabinet/studentCabinet"
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
            path:'/university',
            component:SinglePage,
            exact:true,
        },
        {
            key:'clientAdd',
            path:'/register',
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
            path:'/zayavka',
            component:Zayavka,
            exact:true,
        },
        {
            key:'balance',
            path:'/profayl',
            component:Profayl,
            exact:true,
        },
        {
            key:'balance',
            path:'/profayl2',
            component:Profayl2,
            exact:true,
        },
        {
            key:'balance',
            path:'/profayl3',
            component:Profayl3,
            exact:true,
        },
        {
            key:'file',
            path:'/fayli',
            component:Fayli,
            exact:true,
        },
        {
            key:'file',
            path:'/fayli',
            component:Fayli,
            exact:true,
        },
        {
            key:'file',
            path:'/oplata',
            component:Oplata,
            exact:true,
        },
        {
            key:'file',
            path:'/oplata2',
            component:Oplata2,
            exact:true,
        },
        {
            key:'file',
            path:'/oplata3',
            component:Oplata3,
            exact:true,
        },
        {
            key:'file',
            path:'/kabinetstudent',
            component:StudentCabinet,
            exact:true,
        },
        {
            key:'file',
            path:'/home/glavny',
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
        // {
        //     key:'file',
        //     path:"/home/filial",
        //     component:Side,
        //     exact:true,
        // },
      
      
    ],
    authonticated:[
       
    ]
}
export default routes