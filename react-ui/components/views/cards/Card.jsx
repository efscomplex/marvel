import React from 'react'
import merge from 'react-ui/resources/merge'
import useSlots from 'react-ui/hooks/useSlots'

function Card(
   {  
      width, 
      children, 
      title = null, 
      subtitle = null, 
      description = null, 
      ...props }
){ 
   const mergedProps 
      = merge(props, {className:"card"}) 

   const {Slot, slots}
      = useSlots(children)
      
   let cardHeader = 
      <div className="card-header">
         <Slot name="header">
            {title && <h1 className="heading-1 card-title">{title}</h1>}
            {subtitle && <h3 className="heading-3 card-subtitle">{subtitle}</h3>}
         </Slot>
      </div>

   let cardBody = 
      <div className="card-body">
         <Slot name="body">
            { description && <div className="paragraph card-text">{description}</div>}
         </Slot>
      </div>

   let cardFooter = 
      <div className="card-footer"> 
         <Slot name="footer"/>
      </div>
   
   return (
      <div {...mergedProps}>
         {  
            (title || subtitle || slots.includes?.("header") )
            && cardHeader  
         }
         {  (description || slots.includes?.("body") )
            && cardBody
         }
         {  slots.includes?.("footer") && cardFooter }
         { slots.length < 1 && children}
      </div>
   )
}

export default Card