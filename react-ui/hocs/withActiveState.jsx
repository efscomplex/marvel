import React from 'src/react-ui/hocs/react'
import useActiveState from 'src/react-ui/hocs/src/hooks/useActiveState'

export default function withActiveState(Comp, opts={initialState: false, name:null}){
   const CompWithActiveState
      =  props  => { 
            const {
               onClick
            } = useActiveState(opts)

         return <Comp id={id} {...props}  onClick={onClick}/>
      }

   return CompWithActiveState
}