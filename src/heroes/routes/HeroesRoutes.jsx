import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>

        <Navbar/>

        <div className='container'>

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                {/* Aqui lo que hace es que me pasa por el id lo que hay en el url (sin elementos que vayan por ejemplo en el &) */}

                {/* Falta aun el Search y el HeroById */}

                <Route path="/" element={<Navigate to = "/marvel" />} />
                {/* esto significa que en caso de no encontrar ninguna de las anteriores
                viajamos a la de marvel */}
                {/* ojo, darnos cuenta que usamos el Navigate, que además hay que importarlo */}
                
            </Routes>

        </div>


    </>
  )
}
