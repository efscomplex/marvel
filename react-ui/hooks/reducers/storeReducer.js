import uniqid from 'src/react-ui/hooks/reducers/uniqid'

const PUSH = "PUSH"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

const type = {
   PUSH,
   UPDATE,
   DELETE   }

export default function storeReducer(state, { type, payload }){
   if (!payload)
      return state
   
   switch(type){
      case PUSH :
         !payload.id && ( payload.id = uniqid() )
         state.push(payload.item)
         
         return [...state]
      
      case UPDATE : 
         if ( payload.item.id )          
            return state.map( item =>
               item.id === payload.item.id 
                  ? payload.item
                  : item
               )
         return state

      case DELETE :
         return state.filter( item => 
            item.id !== payload.id
         )

      default :
         return state
   }
}

export const reducer = storeReducer
export { type }

