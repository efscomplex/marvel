import React, { useContext } from 'react'
import uniqid from 'uniqid'
import useFormControl from 'react-ui/hooks/useFormControl'
import formContext from 'react-ui/context/formContext'

export default function TextArea({name, label, id, initial="", ...props}){

   const {
      state, 
      onChange } = useFormControl(initial)
   
   const textAreaId = id || uniqid()
   const update = useContext(formContext)

   const onChangeTextArea
      = event => {
         onChange(event)
         return update?.({ [name]: event.target.value } )
      }
      

   return(
      <>
         { label && <label htmlFor={textAreaId}> {label} </label>}
         <textarea onChange={onChangeTextArea} className="form-control" id={textAreaId} value={state}  {...props}/>
      </>
   )
   
}