import React, {memo} from 'react'
import Link from 'react-ui/components/base/links/Link'

function Icon(
   { svg: Svg, src, size=35, color, style, className, href, to, children}
){ 
   const props = {
      color,
      style,
      className,
      size
   }

   const wrap = el => (href || to) 
      ? <Link href={href || to}>{el}</Link> 
      : el

   if (Svg) {
      const svg = <Svg {...props}/>
      return wrap(svg)

   }else if (src){
      const style = {width: `${size}px`, maxWidth: size || '2rem'}
      const img = <img  alt="icon" src={src} {...props} style={style}/>
      
      return wrap(img)
   }

   return (children && <div>{children}</div>) || null  
}

export default memo(Icon)
