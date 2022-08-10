import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppRouter } from '../../router/AppRouter';
import { Navbar } from '../../ui';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const {login} =useContext (AuthContext);

  const navigate = useNavigate(); //antes que nada uso el customhook creado por la gente de react y la importo

  const onLogin= () =>{

    login( 'Javier Peña' ); 

    //ahora usare el navigate para indicar a que página quiero navegar cuando se pulse el botón
    navigate('/', {
      replace: true//lo que hace es evitar que la persona con la flecha de back (<-) del navegador
      //pueda regresar a lo navegado anteriormente porque estamos reemplazándolo.
      //si lo probamos normal puede dar falsos positivos, mejor hacer la prueba en una página en privado
    });

  }

  return (
    <div className='container mt-5'>
      {/* <Navbar/> */}
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary'
      onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
