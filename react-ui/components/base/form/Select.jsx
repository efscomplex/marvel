import React, { useContext } from 'react'
import uniqid from 'uniqid'
import useFormControl from 'react-ui/hooks/useFormControl'
import formContext from 'react-ui/context/formContext'

function Input(
   {label, name, options, initial="", id, handle, ...props}
){
   
   const selectId = id || uniqid()
   const update = useContext(formContext)
   const { 
      state,  
      onChange 
   } = useFormControl(initial, handle)

   const onChangeSelect = event => {
      const value = event.target.value
      onChange(value)
      return update?.({ [name]: value })
   }

   return (
      <>
         { label && <label htmlFor={selectId}> {label} </label>}
         <select  
            onChange={onChangeSelect} 
            id={selectId} 
            value={state}  
            {...props}
            >
               { 
                  options.map(
                     (opt,i) => 
                        <option key={i}>
                           {opt}
                        </option>
                  )
               }
         </select>
      </>
   )
}

Input.defaultProps = {
   options: []
}

export default Input