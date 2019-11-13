import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Content from './components/Content';
import Rightbar from './components/Rightbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import Adduser from './components/Adduser';

class App extends Component {
  constructor(props){
    super(props);   
      
  } 
  render() {   
    return (
      <Router>
        <div className="container">
        <Header/>   
        <div className="row">
          <div className="col-sm-2 sidenav">
          <Sidebar/>
          </div>
          <div className="col-sm-8 text-left"> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Aboutus}/>
            <Route path="/users" component={Users}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/adduser/" component={Adduser}/>
          </Switch>
          </div>
          <div className="col-sm-2 sidenav">
          <Sidebar/>
          </div>        
        </div>
        <div className="row">
        <Footer/>
        </div>
        
        
      </div>       
      </Router>
    );
  }
}
export default App;