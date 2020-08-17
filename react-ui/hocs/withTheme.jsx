import React from 'react'

export default function withTheme(Wrapped){

   return ({theme, ...props}) => {
      return <Wrapped css={theme} {...props}/>
   }
}
