import React from 'react';
import {Link } from "react-router-dom";
class Footer extends React.Component{
    render(){
        return(
            <footer className="container">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>  
                <li><Link to="/users">Users</Link></li>   
                <li><Link to="/register">Register</Link></li>   
            </ul>
            </footer>
        );
    }
}
export default Footer
