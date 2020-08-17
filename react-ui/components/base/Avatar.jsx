import React from 'src/react-ui/components/base/react'

export default function Avatar(
      {size="8rem", src, position, alt="avatar profile",style={}, className}
){
      console.log(position);
      
      style = {
            ...style,
            width: size,
            height: size,
            objectPosition: !!position ? position : "center"
      }
      return (
            <img 
                  className={className + " avatar"}
                  style={style}
                  alt={alt}
                  src={src}/>
      )
}
