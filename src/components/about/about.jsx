import React from "react";
import './style.css'
import bigpic from "../../assets/imnages/about-05.jpg"
class About extends React.Component {
    render() {
        return <div className="about-box">
            <img src={this.props.item.picture} alt="" />
            <div className="workers-half">
                <h3 className="worker-name">{this.props.item.name}</h3>
                <p className="worker-description">{this.props.item.description}</p>
                <p className="worker-info">{this.props.item.info}</p>
                {/* <p>{this.props.item.name}</p> */}
                </div>
                
        </div>



    }
}
export default About 