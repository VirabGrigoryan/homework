import React from "react";
import './style.css'

class Product extends React.Component {
    render() {
        return <div className="product-box">
            <img src={this.props.item.image} alt=""  />
            <h3 className="title">{this.props.item.title}</h3>
            <p className="description">{this.props.item.description}</p>
            <p className="price">{this.props.item.price}</p>
            {/* <p>{this.props.item.name}</p> */}
        </div>



    }
}

export default Product