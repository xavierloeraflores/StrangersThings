import React  from 'react'
import { Route } from 'react-router';
import Posts from './components/Posts/Posts';
import Authentication from './components/Authentication'
import Test from './components/Test';

const App = () => {
    return (
        <>
        <Test />
        <Route exact path='/'>
            HOME
        </Route>
        <Route path ='/posts'>
            <Posts />
        </Route>
        <Route path='/profile'>
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