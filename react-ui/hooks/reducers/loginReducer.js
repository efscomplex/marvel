export const type = {
   LOGIN: 'LOGIN',
   LOGOUT: 'LOGOUT'
}

export function reducer( state, { type } ){
   switch( type ){
      case "LOGIN":
            return true
      case "LOGOUT":
         return false
      default:
         return state
   }
}

export default reducer