import { useState } from 'src/react-ui/hooks/react'

const defaults
   = {state: "", dispatch: null}
export default function useInput({state="", dispatch}=defaults){
   const [
      value,
      setValue
   ] = useState(state)

   const onChange
      = event => {
         setValue(event.target.value) 
         dispatch && dispatch(
            { type: "ON_INPUT_CHANGE", value}
         )
      }

   return {
      value,
      setValue,
      onChange
   }

}