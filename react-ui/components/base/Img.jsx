import React from 'src/react-ui/components/base/react'
export default function Img({src, ...props}){

   return (
      <>
         <img src={src} {...props}/>
         <style jsx>{`
            img {
               max-width:100%;
               object-position:center;
               object-fit: cover;
            }   
         `}</style>
      </>
   )
}