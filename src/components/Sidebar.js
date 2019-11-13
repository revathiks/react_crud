import React from 'react';
class Sidebar extends React.Component{
render(){
    return(
        <div>sidebar content display here {this.props.sidebarProp}</div>
    );
}
}
export default Sidebar;