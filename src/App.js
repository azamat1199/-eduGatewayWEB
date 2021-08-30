import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Web from "./components/web/web"
// import StudentCabinet from "./components/StudentCabinet/studentCabinet"
// import ConsultantBackoffice from './components/consultantBackoffice/consultantBackoffice';
// import UniversitetBackoffice from './components/univerBackoffice/universitetBackoffice';
// import Kabinet from './components/StudentCabinet/pages/kabinet';


function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Web} />
            {/* <Route path="/kabinetstudent" component={StudentCabinet} />
            <Route path="/login" component={ConsultantBackoffice} />
            <Route path="/univerBackofficePage" component={UniversitetBackoffice} /> */}
            
        </Switch>
    </Router>
  );
}

export default App;
