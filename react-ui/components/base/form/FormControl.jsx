import React from 'react'
import Form from './index'

export default function FormControl(
   { name, initial, ctrl="Input", type="text", label, ...props}
){
   const Control = Form[ctrl]
   if (!Control) return null

   const ctrlType = ctrl === 'Input' ? type : null

   name = name ? name : label?.toLowerCase() 

   return (
      <div className="form-group">
         <Control name={name} initial={initial} type={ctrlType} label={label} {...props}/>
      </div>
   )
}