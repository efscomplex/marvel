import { useReducer } from 'react'
import { reducer, type } from './reducers/formReducer'
import formControlEmitter from 'react-ui/emitters/formControl'


export default function useForm(action, initialState = undefined ) {

   const [state, dispatch] = useReducer(reducer, initialState)

   const actions = {
      update: payload => dispatch({ type: type.UPDATE, payload }),
      reset: () => {
         dispatch({ type: type.UPDATE, payload: initialState })
         return formControlEmitter.emit( type.RESET )
      }
   }
   
   const onSubmit = (event) => {
      event.preventDefault()
      if (action) action(state)
      actions.reset()
   }

   return {
      state,
      dispatch,
      onSubmit,
      onReset: actions.reset,
      action: actions,
   }
}