import React from'react'
import useToggle from 'react-ui/hooks/useToggle'
import getIcon from 'react-ui/resources/react-icons'

const { bs: {Home} } = getIcon()

export default function withToggler(Comp){
   return ({ children, ...props}) => {
      const {
         state,
         onToggle
      } = useToggle(false)

      return (
         <>
            <li className="link-item" style={{cursor:"pointer"}} onClick={onToggle}>
               <Home color="white" size="40"/>
            </li>
            <Comp show={state} {...props}>
               {children}
            </Comp>
         </>
      )
   }
}
