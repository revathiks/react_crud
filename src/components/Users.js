import React from'react';
var apiListUsersUrl="http://localhost/reactBackend/api/userslist.php";
var apiRegisterUrl="http://localhost/reactBackend/api/register.php";
//var userdetailApi="http://localhost/reactBackend/api/userdetail.php";
class Users extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      errors:{}, 
      user:{
        isRegistered:0,
        name:'',
        email:'',
        password:''
     } ,  
      addedusers: [],
      users:[]
      };
    this.addedusers2=[];
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
                  document.getElementById('adduser').click();
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
 
    getUsersList(){
      const requestOptions={
        method:'GET'       
      }     

      fetch(apiListUsersUrl,requestOptions).then(
       (response)=>response.json()).then((responseData)=>{        
       
        this.setState(
          {
            users:responseData.users,
            addedusers2:responseData.users
          }
        )
           
        console.log(this.state.users);
        console.log(this.addedusers2);
       });
    }
    componentDidMount(){
      //this.bind.getUsersList.bind(this);
      this.getUsersList();
    }
   
    render(){
        return(
            <div>
              <div className="pull-right"><span data-toggle="modal" id="adduser" data-target="#myModalUser" >Add User</span></div>
              <div className="modal" id="myModalUser">
                    <div className="modal-dialog">
                        <div className="modal-content">

                        
                        <div className="modal-header">
                            <h4 className="modal-title">Add User</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        
                        <div className="modal-body">
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

                    
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                        </div>
                    </div>
                    </div>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>                        
                        <th>Actions</th>
                    </tr>
                </thead>
                 <tbody>
                    {this.state.users.map((detail,index)=><Tablerow key={index} userinfo={detail}/>)}
                </tbody>
               </table>
           </div> 
        );
    }

}
class Tablerow extends React.Component{
    constructor(props){
        super(props);        
        this.edituser=this.edituser.bind(this);
    } 
    
    edituser(e){
      console.log(e);
      
    }
    render(){
        return(         
        <tr>
          <td>{this.props.userinfo.name}</td>
          <td>{this.props.userinfo.email}</td>     
          <td>
				  <span data-toggle="modal" id="adduser" data-target="#myModalUser" onClick={this.edituser.bind(this.props.userinfo.id)}>Edit</span>
          <a className="delete" >Delete</a>
         </td>    
        </tr>
        );
      }
}
export default Users