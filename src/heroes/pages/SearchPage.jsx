import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hook/useForm'
import queryString from 'query-string'; //instalación de un paquete necesario con yarn add query-string
//se usa para extraer todo lo que se encuentra en el objeto del search

import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';



export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const query = queryString.parse( location.search ); // es decir la propiedad search de location
  // console.log("query--->",query)
 
  const {q = ''} = query;

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0); //devuelve true o false segun si se cumple la condición
  const showError = (q.length > 0) && heroes.length === 0;



  const {searchText, onInputChange} = useForm({
    searchText: q,
  }) //Al useForm le enviamos el valor de q por medio de searchText y como respuesta desectructuramos el searchText y el onInputChange

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`); //aqui voy a mandar a la url un parámetro con ?q=lo que se escribio

    // console.log({searchText});
  }



  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">

            <div className="col-5">
              <h4>Searching</h4>
              <hr />
              <form onSubmit={ onSearchSubmit }>
                <input 
                type="text" 
                placeholder='Search a hero' 
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange = {onInputChange}
                />

                <button className='btn btn-outline-primary mt-1'>
                  Search
                </button>

              </form>
            </div>

            <div className="col-7">

                <h4>Results</h4>
                <hr />


                {/* Una forma de controlar los mensajes de error puede ser: */}
                {/* {
                  ( q === '' )
                  ? <div className='alert alert-primary'> Search a hero</div>
                  : (heroes.length === 0) 
                  && <div className='alert alert-danger'>No hero with <b>{q}</b></div>
                } */}

                {/* Otra forma de controlar los mensajes de error es: */}

                <div className='alert alert-primary animate__animated animate__fadeIn' style={{display: showSearch ? '' : 'none'}}>
                   Search a hero
                </div>

                <div className='alert alert-danger animate__animated animate__fadeIn' style={{ display : showError ? '' : 'none' }}>
                  No hero with <b>{q}</b>
                  </div>


                {
                  heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                  ))
                }

                {/* <HeroCard {...hero} /> */}


            </div>

        </div>


    </>
  )
}
