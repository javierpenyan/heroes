import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { DcPage, HeroesRoutes, MarvelPage } from '../heroes';
import { Navbar } from '../ui' //como tenemos el index.js lo exporta todo, no hay que especificar si es Navbar o que es
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


//ASI ES COMO SE CREAN LAS RUTAS PARA NAVEGAR POR NUESTRA PÁGINA


export const AppRouter = () => {

  return (
    <>


        <Routes>

            <Route path="/login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            } />


            <Route path='/*' element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>
            
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            
        </Routes>
    </>

  )
}
