import { types } from "../types/types";



export const authReducer = (state = {}, action) =>{

    switch ( action.type ){

        case types.login:
            return {
                ...state, //el ...state lo pongo por si el dia de mañana quiero poner mas campo para que no se borren
                logged: true,
                user: action.payload
            } //se decuelve al authState creo

        case types.logout:
            return {
                logged: false,
                //no pongo el nombre porque no lo voy a tener y es como poner name: null
            }

        default:
            return state;
    }


}