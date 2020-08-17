import React from 'react'
import merge from 'react-ui/resources/merge'

const Template
   = ( {children} ) => <> {children} </>

const isNamedSlot
   = child => 
      child?.props?.slot 
         ? child.props.slot !== "default"
         : false

function useSlots(childs){
   
   childs = childs?.filter 
      ? childs
      : [childs]

   let namedSlots = []
   let defaultSlots = []

   childs.forEach(
      child => isNamedSlot(child)
         ? namedSlots.push(child)
         : defaultSlots.push(child)
   )
      
   const Slot = ({name="default", children, ...props}) => {
      let slotContent = null
         if (name !== "default"){
            let child = namedSlots.find( child => child.props.slot === name)
            slotContent = child && React.cloneElement(
               child,
               merge(props, child.props),
               child.props.children) 
            slotContent = slotContent ?? children
         }else{
            slotContent = (defaultSlots.length>0 && defaultSlots) || children
         }

      return <Template> {slotContent} </Template>
   }
      
   const slots
      = namedSlots.map( slot => slot.props.slot )
   
   return {Slot, slots, childs: defaultSlots}
}

export default useSlots