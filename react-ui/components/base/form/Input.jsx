import React, { useContext } from 'react'
import uniqid from 'uniqid'
import useFormControl from 'react-ui/hooks/useFormControl'
import formContext from 'react-ui/context/formContext'

export default function Input(
   {label, name, initial="", type="text", id, handle, ...props}
){
   
   const inputId = id || uniqid()
   const update = useContext(formContext)
   const { 
      state,  
      onChange 
   } = useFormControl(initial, handle)

   const onChangeInput = event => {
      const value = event.target.value
      onChange(value)
      return update?.({ [name]: value })
   }

   return (
      <>
         { label && <label htmlFor={inputId}> {label} </label>}
         <input type={type} onChange={onChangeInput} id={inputId} value={state}  {...props}/>
      </>
   )
}