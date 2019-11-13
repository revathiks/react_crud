import React from 'react';
var apiRegisterUrl="http://localhost/reactBackend/api/register.php";
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errors:{},
            user:{
                isRegistered:0,
                name:'',
                email:'',
                password:''
            }           
        }
        this.processRegister=this.processRegister.bind(this);
        this.changeData=this.changeData.bind(this);
    }
    changeData(e){
        const fieldName=e.target.name;        
        const fieldValue=e.target.value;  
        const user = this.state.user;
        user[fieldName]=fieldValue;   
        this.setState({user});
       
    }
    handleValidation(){
        let fields=this.state.user;
        let errors={};
        let formIsValid=true;       
       
        if(!(fields['name'])){           
            formIsValid=false;
            errors['name']="Name Can not be null"; 
        }
        
        if(fields['name']!=""){           
            if(!fields['name'].match(/^[a-zA-Z]+$/)){
                formIsValid=false;
                errors['name']="Name shoud have alpha";
            }
        }
        this.setState({errors:errors});
        return formIsValid;
        
    }
    processRegister(e){
        e.preventDefault();        
        if(this.handleValidation()){
                const formdata=new FormData(event.target);   
                const requestOptions={
                    method:'POST',
                    body:formdata
                }
            
                const user = this.state.user;
                fetch(apiRegisterUrl, requestOptions)  
                .then((response) => response.json())
                .then((responsedata)=>{                 
                if(responsedata.actionState==1){
                
                    user['isRegistered']=1;  
                    this.setState({user}); 
                    this.props.history.push('/users');                    
                }
                else{
                    user['isRegistered']=0;  
                    this.setState({user}); 
                }               
                
            }
            );
    } else{       
        console.log(this.state.errors);
        console.log(this.state.user);
    }

    }
    render(){
        return(
            <div>
            <form onSubmit={this.processRegister}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onChange={this.changeData}/>
                    <span className="invalid">{this.state.errors["name"]}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your Email" onChange={this.changeData}/>
                    <span className="error">{this.state.errors["email"]}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={this.changeData}/>
                    <span className="error">{this.state.errors["password"]}</span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
}
export default Register