import React from "react";
import './style.css';
import avocado from '../../assets/imnages/img-01.jpg'

class EndSection extends React.Component {
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
                <div className="end-budd"><a href="#" className="end-but" >Read More</a></div>
            </div>
            
        </div>
    }
}
export default EndSection