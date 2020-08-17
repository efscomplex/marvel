import { useReducer } from 'react'
import { reducer, type } from './reducers/modalReducer'

export default function useModal(){
   const [state, dispatch]
      = useReducer( reducer, false )
   
   const action = {
      toggle:  ()=> dispatch({ type: type.TOGGLE }),
      close: () => dispatch({type: type.CLOSE }),
      open: () => dispatch({type: type.OPEN}) 
   }
      
   return {
      state, 
      dispatch,
      action,
      type
   }
}
