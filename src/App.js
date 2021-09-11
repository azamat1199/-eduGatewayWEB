import React from 'react';
import { Switch,Route,Redirect} from "react-router-dom";
import {useSelector} from 'react-redux'

import routes from './routes/routes';
import  "./style/css/sidebarCabinet.css" 
import "./style/css/sidebar.css"
import MainEduGate from './containers/web/pages/MainEduGate';
import Home from './containers/consultantBackoffice/univerBackoffice/pages/home'

function App() {
  const selector = useSelector(state=>state)
  console.log(selector.user)
  const {access} = selector.user;
  const {user} = selector.user;
  if (!access) {
   return (  
     <>
      <Redirect to="/"/>
      <Switch>
            {routes.public.map(item=>{
              return(
                <Route {...item}/>
              ) 
            })}
            <Route component={MainEduGate}/>
      </Switch>
    </>
   )
  }

if(user.role.startsWith('u')){
  return(
    <div className="asos_u">
  <Redirect to="/univer-backoffice-page"/>
            <Switch>
              {routes.univerOffice.map(item=>{
                return(
                  <Route {...item}/>
                )
              })}
              <Route component={Home}/>
						</Switch>
            </div>
  )
}
  return (
    <>
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
         

        
            <div className="switchs">
                  <Switch>
                  {routes.consult.map(item=>{
                  return(
                  <Route {...item}/>
                  )
              })}
            </Switch>
           </div>
        
           
       

        </>
  );
}

export default App;
