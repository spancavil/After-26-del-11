import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'

const RestrictedRoute = ({children}) => {

    const {logged, user} = useContext(UserContext);
    return user.email === "sebastian@live.com" ? children : <Navigate to = '/'/>

}

export default RestrictedRoute
