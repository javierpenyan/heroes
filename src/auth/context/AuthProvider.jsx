

import React, { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

const initalState = {
    logged: false,
}

const init = () =>{
    const user =JSON.parse(localStorage.getItem('user'));

    console.log("user=>", user);
    console.log("!!user=>", !!user);

    return{
        logged: !!user, //con esto un null o undefined se convierte en un false. Asi es interpretable
        user: user,
    }
}

console.log("init===>", init);


export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer( authReducer, initalState, init ); // el init o funcion de inicializacion se usa par inicializar le estado
    //el authState es lo que coge el valor de los return del authReducer creo

    console.log("authState--->", authState);


    const login = ( name = '' ) => {

        const user = {id:'ABC', name}; //esto lo hago para pasar esos datos al localStorage y al payload

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user)); //tener siempre en cuenta que al LS solo puedo pasar string, por lo que hay que 
        //convertir en string el objeto

        dispatch(action);
    }


    const logout = () =>{
        localStorage.removeItem('user'); //voy a borrar el user del localStorage
        const action = { type: types.logout };
        dispatch( action );
    }




    return (

        // Así creamos nuestro proveedor de información
      <AuthContext.Provider value={{
        //atibutes:
        ...authState, //es la desectructuración del authState lo que envio en props

        //methods:
        login: login, //es la función lo que envio en props
        logout: logout //es la función de logoyt lo que envío en porops
      }}> 
        {children} 
    </AuthContext.Provider>
  );
}
