import React  from 'react'
import { Route } from 'react-router';
import Posts from './components/Posts/Posts';

const App = () => {
    return (
        <>
        <Route exact path='/'>
            HOME
        </Route>
        <Route path ='/posts'>
            <Posts />
        </Route>
        <Route path='/profile'>
            Profile
        </Route>
        <Route path='/login'>
            Log In 
        </Route>
        <Route path='/register'>
            Register
        </Route>
        </>
    )
}
export default App;