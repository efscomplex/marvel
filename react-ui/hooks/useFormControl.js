import { useState } from 'react'
import formcControlEmitter from 'react-ui/emitters/formControl'

export default function useFormControl(initialState, handle){
   const [
      state, 
      setState
   ] = useState(initialState)   

   const onChange = value => {
      setState(value)
      return handle?.(value)
   }

   formcControlEmitter.on('RESET', () => setState(initialState))
   formcControlEmitter.on('UPDATE', item => setState(item))

   return { 
      state,
      setState,
      onChange,
   }
}