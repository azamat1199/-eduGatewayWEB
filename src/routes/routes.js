import Login from "../containers/consultantBackoffice/pages/Login"
import SinglePage from "../containers/web/pages/SinglePage"
import SingUp from "../containers/web/pages/singup/SingUp"


const routes = {
    authenticated:[
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
        // {
        //     key:'',
        //     path:'/partnyors',
        //     component:Partnyor,
        //     exact:true,
        // },
        // {
        //     key:'invoideAdd',
        //     path:'/invoice/add',
        //     component:AddInvoice,
        //     exact:true,
        // },
      
    ],
    public:[
        // {
        //     key:'signin',
        //     path:'/sign-in',
        //     component:SignIn,
        //     exact:true,
        // },
        // {
        //     key:'sign-up',
        //     path:'/sign-up',
        //     component:SignUp,
        //     exact:true,
        // }
    ]
}
export default routes