import React from 'react'

export default function Section(
   {px, py='2rem', pd, children, ...props}
){

   return (
      <section {...props}>
         { children }
         <style jsx>{`
            section {
               padding-left: ${px || pd || 'initial'};
               padding-right: ${px || pd || 'initial'};
               padding-top: ${py || pd || 'initial'};
               padding-bottom: ${py || pd || 'initial'};
            }
         `}</style>
      </section>
   )
}