import React from "react";
import AboutEndSection from "./components/endSection/abEndSec"
import ContactInfoSection from "./components/info/contactInfo";
import AbInfoSection from "./components/info/abinfo"
import Header from "./components/header/header";
import InfoSection from "./components/info/info"
import Product from "./components/product/products";
import EndSection from "./components/endSection/endSec"
import Fusce from "./assets/imnages/01.jpg"
import Aliquam from "./assets/imnages/02.jpg"
import Sed from "./assets/imnages/03.jpg"
import sagittis from "./assets/imnages/04.jpg"
import Maecenas from "./assets/imnages/05.jpg"
import Quisque from "./assets/imnages/06.jpg"
import ultricies from "./assets/imnages/07.jpg"
import Donec from "./assets/imnages/08.jpg"
import About from "./components/about/about";
import Jennifer from "./assets/imnages/about-01.jpg"
import Daisy from "./assets/imnages/about-02.jpg"
import Florence from "./assets/imnages/about-03.jpg"
import Valentina from "./assets/imnages/about-04.jpg"
import bicpic from "./assets/imnages/about-05.jpg"
import bibar from "./assets/imnages/read.01.png"
import terev from "./assets/imnages/read.02.png"
import bajak from "./assets/imnages/read.03.png"
import Read from "./components/read";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
class App extends React.Component {

    menuList = [{
        image: Fusce,
        title: 'Fusce dictum finibus',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$45 / $55',
        name: 'pizza'
    },
    {
        image: Aliquam,
        title: 'Aliquam sagittis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$65 / $70',
        name: 'pizza'
    },
    {
        image: Sed,
        title: 'Sed varius turpis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$30.50',
        name: 'pizza'
    },
    {
        image: sagittis,
        title: 'Aliquam sagittis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$25.50',
        name: 'pizza'
    },
    {
        image: Maecenas,
        title: 'Maecenas eget justo',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$80.25',
        name: 'pizza'
    },
    {
        image: Quisque,
        title: 'Quisque et felis eros',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$20 / $40 / $60',
        name: 'pizza'
    },
    {
        image: ultricies,
        title: 'Sed ultricies du',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$94',
        name: 'pizza'
    },
    {
        image: Donec,
        title: 'Donec porta consequat',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price: '$15',
        name: 'pizza'
    },


    ]
    workerList = [
        {
            picture: Jennifer,
            name: 'Jennifer Soft',
            description: 'Founder and CEO',
            info: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio. ',
            website: '',
        },
        {
            picture: Daisy,
            name: 'Daisy Walker',
            description: 'Founder and CEO',
            info: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
            website: '',
        },
        {
            picture: Florence,
            name: 'Florence Nelson',
            description: 'Founder and CEO',
            info: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae. ',
            website: '',
        },
        {
            picture: Valentina,
            name: 'Valentina Martin',
            description: 'Founder and CEO',
            info: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
            website: '',
        }
    ]
    infoList = [
        {

        }
    ]
    readList = [
        {
            pic: bibar,
            desc: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.'

        },
        {
            pic: terev,
            desc: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.'

        },
        {
            pic: bajak,
            desc: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.'

        },
    ]


    render() {
        return <div className={'gap-15 G-container'}>

            <Header />

            <InfoSection />

            <section>
                <div className="G-container">
                    <div className="products">
                        <div className="products-tabs">
                            <span><a href="">Pizza</a></span>
                            <span><a href="">Salad</a></span>
                            <span><a href="">Noodle</a></span>
                        </div>
                        <div className="products-list">
                            {this.menuList.map((emil, index) => {
                                return <Product item={emil} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <EndSection/>
            <Footer/>
            <section>
                <AbInfoSection />
                <div className="G-container">
                    <div className="workers">
                        <div className="about-list">
                            {this.workerList.map((emil, index) => {
                                return <About item={emil} />
                            })}
                        </div>
                    </div>
                </div>

                <div className="scl-pic G-container">
                    <img src={bicpic} className="roll-pic" />
                </div>
            </section>
            <section>
                <div className="G-container ">
                    <div className="rm-half">

                        {this.readList.map((emil, index) => {
                            return <Read item={emil} />
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className="G-container">
                    <AboutEndSection/>
                </div>
            </section>
            <Footer/>
            <ContactInfoSection/>
            <Contact/>
            <Footer/>
        </div>

    }

}

export default App

