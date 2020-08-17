//import React from 'react'
import styled from 'styled-components'

export default (...comps) =>
   comps
      .map((comp) => ({ ...comp, ...styled(comp)`` }))
      /* .reduce((prev, Curr) => {
         return (props) => <Curr as={prev} {...props} />
      }) */
      .reduce((prev, curr) => {
         return { ...prev, ...curr, attrs: { ...prev.attrs, ...curr.attrs } }
      })
