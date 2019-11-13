import React from 'react';
var userdetailApi="http://localhost/reactBackend/api/userdetail.php";
class Adduser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errors:{},
        }        
    }
    fetchUser(){

    }
    componentDidMount(){
        this.fetchUser();
    }
    render(){
        return(
            <div> 
            <form onSubmit={this.processRegister}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={this.changeData}/>
                <span className="invalid">{this.state.errors["name"]}</span>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email" name="email" onChange={this.changeData}/>
                <span className="error">{this.state.errors["email"]}</span>
            </div>          
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        );
    }
}
export default Adduser;