import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = (  ) => {

    const {user, logout} = useContext(AuthContext);
    // console.log("user--->",user);

    // console.log("props--->", props);

    //antes que nada uso el customhook creado por la gente de react y la importo
    const navigate = useNavigate();//esto es un hustonhook hecho por la gente de react para ayudarnos con la navegación

    const onLogout = () =>{
        // console.log("logout");

            // llamo al logout
            logout();


            //ahora usare el navigate para indicar a que página quiero navegar cuando se pulse el botón
            navigate('/login', {
                replace: true //lo que hace es evitar que la persona con la flecha de back (<-) del navegador
                //pueda regresar a lo navegado anteriormente porque estamos reemplazándolo.
                //si lo probamos normal puede dar falsos positivos, mejor hacer la prueba en una página en privado
            })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `} //para saber si esta activa o no la clase
                        //desectructuramos la parte del NavLink isActive y posteriormente preguntamos si esta activa, y si es así colocamos la
                        //clase active y si no colocamos ''
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/search"
                    >
                        Search
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' } `}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}

                    <span className='nav-item nav-link text-primary'>
                        {user?.name} 
                        {/* //lo que hace esto es que si es null no pone nada y si no lo es pone el nombre */}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}
