import React  from 'react'
import { Route } from 'react-router';

const App = () => {
    return (
        <>
        <Route path='/home'>
            HOME
        </Route>
        <Route path ='/posts'>
            Posts
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