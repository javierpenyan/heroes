import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({children}) => { //dentro del children recibo los componentes del PrivateRoute

    const { logged } = useContext(AuthContext);

  return ( logged )
  ? children
  : <Navigate to = "/login" />
}


//se completa con el código de Fernando para que puedas volver a la misma página en la que estábamos si nos volvemos a registrar, pero 
//lo lo he implementado para no liar mas el código aquí