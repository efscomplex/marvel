import {useState} from 'react'

const defaultOpt = {on='active', off= ''}
export default function useToggleClass(opt=defaultOpt, initial='on'){
   const [
      currentClass,
      setCurrentClass
   ] = useState(opt[initial])

   const toggleClass = () => setState(state => {
      state === opt.on ? opt.off : opt.on
   })
   
   return {
      currentClass,
      setCurrentClass,
      toggleClass,
   } 
}