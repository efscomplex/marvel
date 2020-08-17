import {useState} from 'react'

function useToggle(param){
   let opts = {}
   typeof param === 'boolean'
      ? opts = {state: param, handle: null}
      : opts = param

   const [
      state,
      setState
   ] = useState(opts.state)

   const onToggle
      = event => {
         event && event.preventDefault()
         setState(state => !state)

         return opts.handle?.(event)
      }
   
   return {
      state,
      setState,
      onToggle
   }
}

export default useToggle