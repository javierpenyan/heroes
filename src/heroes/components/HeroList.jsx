import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  //***************sin usar useMEmo****************** */

  //   const heroes = getHeroesByPublisher(publisher);

  // return (
  //   <div className='row rows-cols-1 row-cols-md-3 g-3'>
  //       {
  //           heroes.map(hero => (
  //               <HeroCard key={hero.id} //el key siempre hay que mandarlo
  //               {...hero} //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
  //               />   
  //           ))
  //       }
  //   </div>
    
  // )

  //*****************usando useMemo***************** */
  const heroes = useMemo( () =>getHeroesByPublisher(publisher), [publisher]); //el useMemo no es mas que una función que dispara el callback que lleva dentro cada vez que sus
  //dependencias cambien. Las dependencias son lo que pongo dentro del [], en este caso el publisher
  //lo que devuelve es el getHeroesByPublisher(publisher) y lo hace cuando cambia publisher
   

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(hero => (
                <HeroCard key={hero.id} //el key siempre hay que mandarlo
                {...hero} //para mandar el resto de propiedades desestructuro el hero, así me evito el pasarlas de una en una
                />   
            ))
        }
    </div>
    
  )
}
