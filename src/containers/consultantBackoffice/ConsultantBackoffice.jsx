import React, { Component } from 'react';
import { BrowserRouter, Route ,  Switch } from 'react-router-dom';

import Login from "./pages/Login"
import LoginStaff from "./pages/LoginStaff"
import Sidebar from "./pages/Sidebar"
import SideGlavny from "./pages/SideGlavny"
import SideUniverstitet from "./pages/SidebarUniverstitet"
import Fakultet from "./pages/Fakultet"
import SidebarFilial from "./pages/SidebarFilial"
import Talabalar from "./pages/Talabalar"
import SideStrana from "./pages/SideStrana"
import SidebarAgentlar from "./pages/SidebarAgentlar"
import Dagavori from "./pages/dagovori"
import SideOtdel from "./pages/SideOtdel"
import Analitika from "./pages/Analitika"
import Plateji from "./pages/Plateji"

class ConsultantBackoffice extends Component {
	state = { 
		burger: false
	 }
	 handleburger = () =>{
		this.setState({
			burger : !this.state.burger
		})
	}
	render() { 
		return ( 
			<React.Fragment>
				 <div className="switchs">
					  <Route path="/home">
						  <div className={this.state.burger ? "switch_asos toggle_burger" :"switch_asos"}>
							  <Sidebar handleburger={this.handleburger} burger={this.state.burger}/>
							  <div onClick={this.handleburger} className="burger_menu">
								  <span></span>
								  <span></span>
								  <span></span>
							  </div>
							  </div>
					  </Route>
							  {/* <Switch>
								  <Route path="/home/glavny">
									  <SideGlavny/>
								  </Route>
								  <Route path="/home/strana">
									  <SideStrana/>
								  </Route>
								  <Route path="/home/universitet">
									  <SideUniverstitet/>
								  </Route>
								  <Route path="/home/fakultet">
									  <Fakultet/>
								  </Route>
								  <Route path="/home/filial">
									  <SidebarFilial/>
								  </Route>
								  <Route pathhhhhhoiuhoiiiiiiuhoiu="/home/talabalar">
									  <Talabalar/>
								  </Route>
								  <Route path="/home/bugalter">
									  <Analitika/>
								  </Route>
								  <Route path="/home/platej">
									  <Plateji/>
								  </Route>
								  <Route path="/home/dagavor">
									  <Dagavori/>
								  </Route>
								  <Route path="/home/agent">
									  <SidebarAgentlar />
								  </Route>
								  <Route path="/home/analitika">
									  <SideOtdel />
								  </Route>
							  </Switch> */}
</div>
			</React.Fragment>
		  );
	}
}
 
export default ConsultantBackoffice;