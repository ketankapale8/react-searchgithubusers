import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import {Route , Redirect} from 'react-router-dom'


export default function PrivateRoute({children , ...rest}) {
    const {isAuthenticated , user} = useAuth0();
    const isUser = isAuthenticated && user;
    return (
        <div>
            <Route
            {...rest}
            render = {()=>{
                return isUser ? children : <Redirect to='/login'></Redirect>

            }}
            >
            </Route>
        </div>
    )
}
