import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";

import ConsultantBackoffice from './containers/consultantBackoffice/ConsultantBackoffice'
import StudentSidebar from './containers/StudentCabinet/pages/SidebarStudent';
import StudentCabinet from './containers/StudentCabinet/studentCabinet';
import Partnyors from './containers/web/pages/Partnyors';
import Registratsiya from './containers/web/pages/registratsiya';
import SinglePage from './containers/web/pages/SinglePage';
import Profayl from './containers/web/pages/singup/Profayl';
import Profayl2 from './containers/web/pages/singup/Profayl2';
import SingUp from './containers/web/pages/singup/SingUp';
import Zayavka from './containers/web/pages/singup/Zayavka';


import Web from "./containers/web/web"
import routes from './routes/routes';

import  "./style/css/sidebarCabinet.css" 
function App() {
  return (
    <>
          <Switch>
            {routes.public.map(item=>{
              return(
                <Route {...item}/>
              )
            })}
          </Switch>

            <div className="kabinet">
              <Switch>
                {
                 routes.student.map(item=>{
                   return(
                     <Route {...item}/>
                   )
                 })
                }
              </Switch>
            </div>

        </>
  );
}

export default App;
