import { ADD_TO_FAV,  REMOVE__FROM__FAV } from './Fav.action'
const initialValues = {
 favList : [],

};


 export function favReducer(state = initialValues, action) {
   switch (action.type) {
     case ADD_TO_FAV:

     if(state.favList.includes(action.payload)) {
       return state  
     }
     else {
      return {
        ...state,
        favList: [...state.favList, action.payload]

      };
     }

     case REMOVE__FROM__FAV : 

     return {
       ...state,
      favList : [
        ...state.favList.filter(item => item !== action.payload)
      ]
       
     }
      
     
     default:
       return state;
   }
 }