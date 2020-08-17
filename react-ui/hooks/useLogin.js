import { useReducer } from 'react'
import { type, reducer } from 'react-ui/hooks/reducers/loginReducer'

export default function useLogin({onLogin, initialState= false}){
   const [
      isLogged, 
      dispatch ] = useReducer( reducer, initialState )

   const action = {
      login: ( ) => dispatch({ type: type.LOGIN }),
      logout: ( ) => dispatch({ type: type.LOGOUT }) 
   }
   const onClick = () => {
      isLogged ? action.logout() : onLogin()
   }

   return {
      state: isLogged,
      dispatch,
      onClick,
      action,
      type,
   }
}