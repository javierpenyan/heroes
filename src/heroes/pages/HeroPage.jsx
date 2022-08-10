import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

//*******************ASI SIN USAR EL USEMEMO**************************** */

// export const HeroPage = () => {

//   // const params = useParams(); //este hook de react nos va a servir para obtener los parametros

//   // console.log("params--->", params); //esto lo hago para ver que me devuelve este hook y abajo hacer la desectructuracion.
//   //ojo que el id me llega porque en HeroesRoutes, en <Route path="hero/:id" element={<HeroPage />} /> puse id, si le pongo
//   // otro nombre me llegara el que le ponga

//   const {id} = useParams(); //lo que me pasa como id es lo que hay en la url (en este caso el nombre del superheroe. No tiene en cuenta
//   //los parámetros que se pasen "por ejemplo con &age=20")
//   // console.log("id--->", id);

//   const navigate = useNavigate();

//   const hero = getHeroById( id );

//   const onNavigateBack = () =>{
//     console.log("entra");
//     navigate(-1); //esto te devuelve a la página anterior por la que habias navegado
//     // return <Navigate to = "/marvel" /> //asi no funciona y no se porque
//   }

//   console.log("heroe--->",hero);

//   if(!hero){
//     return <Navigate to = "/marvel" /> //porque aqui me funciona y arriba no ????????
//   }

//   return (
//     <div className='row mt-5'>
//       <div className="col-4"><img 
//       src={`/assets/heroes/${id}.jpg`} 
//       alt={hero.superhero}
//       className='img-thumbnail'
//        />
//       </div>

//     <div className="col-8">
//       <h3>{hero.superhero}</h3>
//       <ul className='list-group list-group-flush'>
//         <li className='list-group-item'> <b> Alter ego: </b> { hero.alter_ego } </li>
//         <li className='list-group-item'> <b> Publisher: </b> { hero.publisher } </li>
//         <li className='list-group-item'> <b> First appearancer: </b> { hero.first_appearance } </li>
//       </ul>

//       <h5 className='mt-3'> Characters </h5>
//       <p> { hero.characters } </p>

//       <button 
//       className='btn btn-outline-primary'
//       onClick={onNavigateBack}
//       >
//         Back
//         </button>

//     </div>

//     </div>
//   )
// }



//****************ASI USANDO EL USEMEMO*************************** */

//UseMemo: Para memorizar valores.
//UseCallback: Para memorizar funciones.

export const HeroPage = () => {

  const {id} = useParams(); 

  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [id] ); //el useMemo no es mas que una función que dispara el callback que lleva dentro cada vez que sus
  //dependencias cambien. Las dependencias son lo que pongo dentro del [], en este caso el id
    //lo que devuelve es getHeroById(id) y lo hace cuando cambia id

  const onNavigateBack = () =>{
    console.log("entra");
    navigate(-1); 
  }

  console.log("heroe--->",hero);

  if(!hero){
    return <Navigate to = "/marvel" /> //porque aqui me funciona y arriba no ????????
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
      <img 
      src={`/assets/heroes/${id}.jpg`} 
      alt={hero.superhero}
      className='img-thumbnail animate__animated animate__fadeInLeft'
       />
      </div>

    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'> <b> Alter ego: </b> { hero.alter_ego } </li>
        <li className='list-group-item'> <b> Publisher: </b> { hero.publisher } </li>
        <li className='list-group-item'> <b> First appearancer: </b> { hero.first_appearance } </li>
      </ul>

      <h5 className='mt-3'> Characters </h5>
      <p> { hero.characters } </p>

      <button 
      className='btn btn-outline-primary'
      onClick={onNavigateBack}
      >
        Back
        </button>

    </div>

    </div>
  )
}
