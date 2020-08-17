import { useReducer } from 'src/react-ui/hooks/react'
import { reducer, type } from './reducers/storeReducer'

export default function useStore(initialState = []){
   const [
      state,
      dispatch ] = useReducer(reducer, initialState)

   const action 
      = {
         push: item => dispatch( {type: type.PUSH , payload:{ item }} ),
         remove: id => () => dispatch( {type: type.DELETE , payload:{id}} ),
         update: item => ()=> dispatch( {type: type.UPDATE , payload:{item}} )
      }
   
   return {
      state,
      dispatch,
      action,
      type,
   }
}