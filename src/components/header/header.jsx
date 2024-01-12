import React from "react";
import './style.css'
import banner from '../../assets/imnages/simple-house-01.jpg'
import logo from '../../assets/imnages/simple-house-logo.png'

class Header extends React.Component {

    render() {
        return <header className={'header-block'} style={{ backgroundImage: `url(${banner}) ` }} >
            <div className="log-s">  <h1 ><a href="#" >
            <img src={logo} alt=""/>Simple House
            </a>
            </h1><p>new restaurant template</p></div>
            <div className="menu-s"><ul className="main-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul></div>
        </header>
    }
}

export default Header

