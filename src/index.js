import React, {useState}  from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import Nav from './components/Nav'
import Footer from './components/Footer'
import './style.css'
import { UserProvider } from './context/UserContext';




const Index = () => {

    // const [isLoggedIn, setIsLoggedIn]

    return (
        <BrowserRouter>
        <UserProvider>

        <div id='page'>
            <Nav/>
            <App />
            <Footer/>
        </div>

        </UserProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Index />, document.getElementById("app"))