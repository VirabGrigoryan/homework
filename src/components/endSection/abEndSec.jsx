import React from "react";
import './style.css';
import endSec from '../../assets/imnages/about-06.jpg'

class AboutEndSection extends React.Component {
    render() {
        return <div className="end-section G-container">
            <div className='img-parte'>
                <img src={endSec} alt="" />
            </div>
            <div className="text-part">
                <h2>History of our restaurant</h2>
                <p className="end-text">
                Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo.
                 Maecenas posuere lorem id augue interdum vehicula.
                  Praesent sed leo eget libero ultricies congue.
                </p>
                <p className="end-text">
                Redistributing this template as a downloadable ZIP file on any template 
                collection site is strictly prohibited.
                 You will need to <a href="#">contact TemplateMo</a> for additional permissions about our templates.
                  Thank you.
                </p>
                
            </div>
            
        </div>
    }
}
export default AboutEndSection