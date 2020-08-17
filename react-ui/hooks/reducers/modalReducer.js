//* ACTIONS **//
const TOGGLE   
   = "TOGGLE"
const CLOSE
   = "CLOSE"
const OPEN
   = "OPEN"

export default function reducer(open, {type}){
   
   switch(type){
      case TOGGLE:
         return !open
      case CLOSE:
         return false
      case OPEN:
         return true
      default :
         return open
   }
}

export { reducer }

export const type = {
   TOGGLE,
   CLOSE,
   OPEN
}