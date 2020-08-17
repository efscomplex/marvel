import React from 'src/react-ui/hocs/react'
import {createContext, useRef} from 'src/react-ui/hocs/react'

export default function withRefCtxt(Comp){
   const CtxtComp
      = props => {
         const ref = useRef()
         const Context
            = createContext(ref)
         return(
            <Context.Provider value={ref}>
               <Comp {...props} ref={ref}/>
            </Context.Provider>
         )
      }

   return CtxtComp
}