import React from 'react'

function Logo({src, Svg, color, size, children, ...props}){
   
   return (
      <div {...props}>
         { src && <img alt={src} src={src} width='100%'/>}
         { Svg && <Svg {...props} color={color} size={size}/>}
         { children }
      </div>
   )
}
Logo.defaultProps = {
   width: '10rem'
}

export default Logo