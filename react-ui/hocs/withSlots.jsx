import React from 'src/react-ui/hocs/react'
import { useSlots } from 'src/react-ui/hocs/src/hooks'

export default function withSlots(Comp, props){
   const SuperComp
      = props => {
         const { 
            Slot,
            slots } = useSlots(props.children)
         
         return {   
            Comp: <Comp {...props}> 
               {props.children.filter(
                  child => !slots.includes(child.props?.slot)
               )} 
            </Comp>,
            Slot
         }
      }

   return SuperComp        
}