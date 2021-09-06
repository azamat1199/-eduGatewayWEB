import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

//import Pages
import Home from './pages/home';
import Info from './pages/info';
import Invoys from './pages/invoys';
import Abiturient from './pages/abiturients';
import Singlepage from './pages/singlepage';

//import img
import logo from  "../../../assets/icon/logo.svg"  
import home from  "../../../assets/icon/Home.svg" 
import user from  "../../../assets/icon/User.svg" 
import paper from "../../../assets/icon/Paper.svg" 
import doc from   "../../../assets/icon/Document.svg"


class UniversitetBackoffice extends Component {
	state = { 
		menu:false
	 }
	handlemenu = () =>{
		this.setState({
			menu : !this.state.menu
		})
	}
	handlemenuclose = () =>{
		this.setState({
			menu : false
		})
	}
	render() { 
		return ( 
			<div className="univerBackoffice">
					<div className="asos_u">
						<div className="asos_1">
							<div className="navfixed" id={this.state.menu ? "left0" : ""}>
								<div className="logo">
									<img src={logo} alt="" />
									<h1>Education Gateway</h1>
								</div>
								<div className="links">
									<NavLink onClick={this.handlemenu} activeClassName="active_unve" exact to="/univer-backoffice-page"><img src={home} alt="" />Главное</NavLink>
									<NavLink onClick={this.handlemenu} activeClassName="active_unve" to="/studentsss"><img src={user} alt="" />Абитуриенты</NavLink>
									<NavLink onClick={this.handlemenu} activeClassName="active_unve" to="/invoice"><img src={paper} alt="" />Инвойсы</NavLink>
									<NavLink onClick={this.handlemenu} activeClassName="active_unve" to="/info"><img src={doc} alt="" />Данные</NavLink>
								</div>
							</div>
							<div className="fix_diiv"></div>
						</div>
						<div className="asos_2" >
							<button onClick={this.handlemenu} className="burger_btn"><span></span><span></span><span></span></button>
							<div className="switchs" onClick={this.handlemenuclose}>
							    {this.props.children}
							</div>
						</div>
					</div>
			</div>
		 );
	}
}
 
export default UniversitetBackoffice;