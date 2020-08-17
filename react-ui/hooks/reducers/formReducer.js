const type = {
   UPDATE: 'UPDATE',
   RESET: 'RESET'
}

export default function reducer(state, { type, payload }){
   switch (type) {
      case 'UPDATE':
         return { ...state, ...payload }
      case 'RESET':
         return {}
      default:
         return state
   }
}

export { 
   reducer,
   type
}