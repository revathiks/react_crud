import React from 'react';
class Content extends  React.Component{
    componentWillMount(){
        console.log("Component will mount")
      }
      componentDidMount(){
        console.log("Component did mount")
      }
      componentWillReceiveProps(newProps){
        console.log("Component will receive  props")
      }
      shouldComponentUpdate(newProps,newState){
        return true;
      }
      componentWillUpdate(nextProps,nextState){
        console.log("Component will update")
      }
      componentDidUpdate(prevProps,prevState){
        console.log("Component did update")
      }
      componentWillUnmount(){
        console.log("Component will unmount")
      }
    
      render(){
        return(
          <div>
         <div>{this.props.contentProp}</div>
         <div>Updated Number is  {this.props.mynumber}</div>
         </div>
        );
      }
}
export default Content