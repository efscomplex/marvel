import React from 'react'
import styled from 'styled-components'

export default function (...comps) {
   if (!comps) return null

   let styledComponents = comps.map((comp) => styled(comp)``)
   let firstComp = styledComponents[0]

   const WrapedComp = styledComponents.reduce((Prev, curr) => {
      const reactComp = (props) => <Prev as={curr} {...props} />
      const styledComp = { ...curr, ...styled(reactComp)`` }
      styledComp.componentStyle.rules = [
         ...Prev.componentStyle.rules,
         ...curr.componentStyle.rules,
      ]
      return styledComp
   })

   return { ...firstComp, ...WrapedComp }
}
