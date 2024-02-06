import './App.css'
import {useEffect} from "react";
import './platform/config'
import {Navigate, NavLink, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Contact} from "./pages/Contact";
import {routerList} from "./routers/routers";
import {ProductDetails} from "./pages/ProductDetails";
import {ServicesContact} from "./pages/ServicesContact";
import {InputForms} from "./pages/InputForms/InputForms";

function App() {

    const location = useLocation()

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [location.pathname]);

    return <div>
        <header>
            <ul>
              
                
                <li>
                    <NavLink to={'/contact'}>Contacts</NavLink>
                </li> 
            </ul>
        </header>
        <Routes>
           
            <Route path={'/contact'} element={<Contact/>}/>
            
        </Routes>
    </div>

    
}


export default App
