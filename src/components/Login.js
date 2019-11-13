import React from 'react';
import {Link } from "react-router-dom";
var apiLoginrl="http://localhost/reactBackend/api/login.php";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errors:{},
            user:{
                isLoggedin:0,
                email:'',
                password:''
            }           
        }
        this.processLogin=this.processLogin.bind(this);
        if(sessionStorage.getItem("isUserLogged")==1)
        {
            this.props.history.push('/home');
        }
    }
    processLogin(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        console.log(formData);
        
        const requestOptions={
            method:'POST',
            body:formData
        }
        fetch(apiLoginrl,requestOptions).then(
            (response)=>response.json()
        ).then((responsedata)=>{
            if(responsedata.actionState==1){
                sessionStorage.setItem("isUserLogged", 1);
                this.props.history.push('/home');
            }else{
                sessionStorage.setItem("isUserLogged", 0);
            }
        }
        )
    }
    render(){
        return(
            <div>
                <Link className="nav-link" to="/login" data-toggle="modal" data-target="#myModalLogin" >Login</Link> 
                 <div className="modal" id="myModalLogin">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        
                        <div className="modal-body">
                        <form onSubmit={this.processLogin}>                
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" placeholder="Enter your Email" onChange={this.changeData}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={this.changeData}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>

                    
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                        </div>
                    </div>
                    </div>
                
             
            </div>
        );
    }
}
export default Login