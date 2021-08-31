import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";

import ConsultantBackoffice from './containers/consultantBackoffice/ConsultantBackoffice'
import Partnyors from './containers/web/pages/Partnyors';
import Registratsiya from './containers/web/pages/registratsiya';
import SinglePage from './containers/web/pages/SinglePage';
import SingUp from './containers/web/pages/singup/SingUp';

import Web from "./containers/web/web"
// import StudentCabinet from "./components/StudentCabinet/studentCabinet"
// import ConsultantBackoffice from './components/consultantBackoffice/consultantBackoffice';
// import UniversitetBackoffice from './components/univerBackoffice/universitetBackoffice';
// import Kabinet from './components/StudentCabinet/pages/kabinet';


function App() {
  
  return (
    <Router>
          <Switch>
            <Route exact  path="/" component={Web} />
            <Route exact path="/register" component={SingUp}></Route>
            <Route path="/login" component={ConsultantBackoffice} />
							{/* <Route  path="/zayavka"><Zayavka/></Route>
							<Route  path="/profayl"><Profayl/></Route>
							<Route  path="/profayl2"><Profayl2/></Route>
							<Route  path="/profayl3"><Profayl3/></Route>
							<Route  path="/fayli"><Fayli/></Route>
							<Route  path="/oplata"><Oplata/></Route>
							<Route  path="/oplata2"><Oplata2/></Route>
							<Route  path="/oplata3"><Oplata3/></Route> 
              <Route path="/kabinetstudent" component={StudentCabinet} />
             <Route path="/login" component={ConsultantBackoffice} />
             <Route path="/univerBackofficePage" component={UniversitetBackoffice} /> */}
             <Route  path="/university">
                               <SinglePage/>
                           </Route>
                          
                           <Route  path="/partnyors" component={Partnyors}>
                           </Route>
                          
                           <Route  path="/cabinet">
                               555555555555555
                           </Route>
        </Switch>
    </Router>
  );
}

export default App;
