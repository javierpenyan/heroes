import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import {Navigate} from 'react-router-dom';

export const PublicRoute = ({children}) => { //dentro del children recibo los componentes del PrivateRoute

    const { logged } = useContext(AuthContext);

  return ( !logged )
  ? children
  : <Navigate to = "/marvel" />
}
