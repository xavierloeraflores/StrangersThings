import React  from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './app';
import Nav from './components/Nav'
import Footer from './components/Footer'




const Index = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <App />
            <Footer/>
        </BrowserRouter>

    )
}
ReactDOM.render(<Index />, document.getElementById("app"))