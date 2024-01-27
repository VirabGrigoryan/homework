import React from "react";
import './style.css'

class Contact extends React.Component {
    render() {
        return <div className="contacts  G-container">
            <div className="contact-part">
                <div className="con-box">
                    <label htmlFor="" className="border"><input type="text" placeholder="Name" /></label>
                    <label htmlFor="" className="border"><input type="email" placeholder="Email" /></label>
                    <label htmlFor="" className="border"><textarea name="" id="" rows="5" cols="40" placeholder="Message"></textarea></label>
                    <div className="but-end"><button className="kojak">Send</button></div>

                </div>
                <div className="adrress-box">
                    <h4 className="ad-title">Our Address</h4>
                    <p className="addres">180 Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur
                        ridiculus mus 10550 </p>
                    <a href="tel:080-090-0110" className="num" >
                        <i class="icon-phone"></i>
                        080-090-0110
                    </a>
                    <a href="mailto:info@company.co" className="num" >
                        <i class="icon-mail2" ></i>
                        info@company.co
                    </a>
                    <a href=""> <i class="icon-bxl-facebooksvg"></i></a>
                    <a href=""><i class="icon-twitter"></i></a>
                    <a href=""> <i class="icon-bxl-instagramsvg"></i></a>
                </div>
            </div>
            <div className="map-part ">
                <iframe src="https://www.google.com/maps" frameborder="0" className="mapik"></iframe>
            </div>
        </div>
    }
}
export default Contact