import {useEffect, useState} from "react";
import './style.scss'
import axios from "axios";
import {BaseURL} from "../../routers/routers";


export const Contact = () => {

    const [toDoList, setToDoList] = useState([
        {id:1,
        title:"iPhone 9",
        description:"An apple mobile which is nothing like apple",
        "price":549,"discountPercentage":12.96,
        "rating":4.69,
        "stock":94,
        "brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images:["https://cdn.dummyjson.com/product-images/1/1.jpg"],}
        
    ])
    const [loading, setLoading] = useState(false)

  

    const getToDoListNew = async () => {
        setLoading(true)
        const result = await axios.get('https://dummyjson.com/products')
        if (result.data) {
            console.log(result);
            setToDoList(result.data.products)
            setLoading(false)
        }

    }

    useEffect(() => {
        getToDoListNew()
    }, []);

    return <div>
        <h1>Contact</h1>

        {!loading ? <div>
            {toDoList.length ? <div className="parent-box">
                {toDoList.map((item, index) => {
                    return <ToDoCard item={item}/>
                })}
            </div> : <div>
                <p> list was empty</p>
            </div>}
        </div> : <div><h1>loading...</h1></div>}
    </div>
}



function ToDoCard({item}) {
    return   <div className={`to-do-card`}>
        <img src={item.images}/>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <p>{item.rating}</p>
        <p>{item.stock}</p>
        <p>{item.brand}</p>
        <p>{item.category}</p>
       
        
      
    </div>
}