import React from'react';
import logo from '../logo.svg';
import {Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);       
    }
    logout(){     
        sessionStorage.setItem('isUserLogged',0);
        this.props.history.push('/home');
    }
    render(){
        return(
        <div className="row">
            <div className="col-sm-4">
                <div className="navbar-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
            <div className="col-sm-8">
                <ul className="nav">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item" >
                <Link className="nav-link" to="/about" >Aboutus</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
                </li>
                
                {
                    sessionStorage.getItem('isUserLogged')==1 ? 
                   
                      <li className="nav-item">
                     <Link className="nav-link" to="/logout" onClick={this.logout}>Logout</Link> 
                     </li>
                    :
                    [
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link> 
                     </li>,
                     <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link> 
                   </li>
                   ]
                }
                
                
                </ul> 
            </div>
           
        
      </div>
      );
    }
}
export default Header