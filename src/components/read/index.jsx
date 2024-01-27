import React from "react";
import './style.css'

class Read extends React.Component{
    render(){
        return <div className="read-box">
            <div className="rm-box">
            <img src={this.props.item.pic} style={{height:150,width:200}} />
            <p className="rm-text">{this.props.item.desc}</p>
            <button className="rm-color">Read More</button>
            </div>
        </div>
    }
} 
export default Read