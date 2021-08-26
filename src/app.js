import React  from 'react'
import { Route } from 'react-router';
import Posts from './components/Posts';
import Authentication from './components/Authentication'
import Test from './components/Test';
import Postform from './components/Postform';

const App = () => {
    return (
        <>
        <Test />
        <Route exact path='/'>
            HOME
        </Route>
        <Route exact path ='/posts'>
            <Posts />
        </Route>
        <Route exact path='/postform'>
            <Postform/>
        </Route>
        <Route exact path='/profile'>
            Profile
        </Route>
        <Route path='/user/:method'>
            <Authentication/>
        </Route>
        <Route path='/user/:method'>
            Register
        </Route>
        </>
    )
}
export default App;