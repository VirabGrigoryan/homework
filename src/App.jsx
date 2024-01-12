import React from "react";
import Header from "./components/header/header";
import InfoSection from "./components/info/info"
import Product from "./components/product/products";
import Footer from "./components/footer/footer"
import Fusce from "./assets/imnages/01.jpg"
import Aliquam from "./assets/imnages/02.jpg"
import Sed from "./assets/imnages/03.jpg"
import sagittis from "./assets/imnages/04.jpg"
import Maecenas from "./assets/imnages/05.jpg"
import Quisque from "./assets/imnages/06.jpg"
import ultricies from "./assets/imnages/07.jpg"
import Donec from "./assets/imnages/08.jpg"


class App extends React.Component {

    menuList =[{
        image: Fusce,
        title: 'Fusce dictum finibus',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$45 / $55',
        name:'pizza'
    },
    {
        image: Aliquam,
        title: 'Aliquam sagittis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$65 / $70',
        name:'pizza'
    },
    {
        image: Sed,
        title: 'Sed varius turpis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$30.50',
        name:'pizza'
    },
    {
        image: sagittis,
        title: 'Aliquam sagittis',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$25.50',
        name:'pizza'
    },
    {
        image: Maecenas,
        title: 'Maecenas eget justo',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$80.25',
        name:'pizza'
    },
    {
        image: Quisque,
        title: 'Quisque et felis eros',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$20 / $40 / $60',
        name:'pizza'
    },
    {
        image: ultricies,
        title: 'Sed ultricies du',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$94',
        name:'pizza'
    },
    {
        image:  Donec ,
        title: 'Donec porta consequat',
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        price:'$15',
        name:'pizza'
    },
    
        
    ]


    render() {
        return <div className={'gap-15 G-container'}>
        
            <Header  />
        
            <InfoSection/>
            
            <section>
                <div className="G-container">
                    <div className="products">
                        <div className="products-tabs">
                            <span><a href="">Pizza</a></span>
                            <span><a href="">Salad</a></span>
                            <span><a href="">Noodle</a></span>
                        </div>
                        <div className="products-list">
                            {this.menuList.map((emil,index)=>{
                                return <Product item={emil}  />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>   
        </div>
        
    }

}

export default App

