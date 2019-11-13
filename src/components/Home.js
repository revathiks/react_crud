import React from 'react';
class Home extends React.Component{
constructor(props){
    super(props);
    this.state2={
        content:"Main Content display here",
        sidebar:"Sidebar content Dispaly here"
      }
  
      this.state={
        data:0,
        data2:1
      }
      this.setDataValue=this.setDataValue.bind(this)  
}
setDataValue(e){     
    this.setState({data:this.state.data+1})
    this.setState({data2:e.target.value})
    console.log(this.state.data);
   }
render(){
    return(
        <div>
        <div>Home content dispaly here</div>
        <div>
          <button onClick={this.setDataValue}>increment</button>
        </div>
        <div><input type="text" value={this.state.data2} onChange={this.setDataValue}></input>
        <h4>{this.state.data2}</h4>
        </div>
        </div>
    );
}
}
export default Home