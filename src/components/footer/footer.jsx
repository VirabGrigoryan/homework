import React from "react";
import './style.css';
import avocado from '../../assets/imnages/img-01.jpg'

class Footer extends React.Component {
    render() {
        return <div className="end-section G-container">
            <div className='img-parte'>
                <img src={avocado} alt="" />
            </div>
            <div className="text-part">
                <h2>Maecenas nulla neque</h2>
                <p className="end-text">
                    Redistributing this template as a downloadable ZIP file on any
                    template collection site is strictly prohibited.
                    You will need to <a href="#">talk to us</a> for additional permissions about our templates. Thank you.
                </p>
                <a href="#" className="end-but" >Read More</a>
            </div>
            
        </div>
    }
}
export default Footer