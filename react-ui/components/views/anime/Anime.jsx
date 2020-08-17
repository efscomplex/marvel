import React, { useState, useEffect } from 'src/react-ui/components/views/anime/react'
import {animeFallback, effect } from './defaults'

export default function Anime(
   { children, trigger = false, animation = animeFallback, show=true, opt=effect }
){
   
   if ( !animation && !animation.enter ) 
         return <> {children} </>

   const [
      state,
      setState ] = useState("enter")

   const [
      mustShow,
      setMustShow ] = useState(show)

   let anime = animation

   if ( typeof animation === "string" ){
      anime = {
            enter: animation,
            leave: animation   }
   }

   useEffect(
      () => setState(trigger ? "leave" : "enter")
      , [trigger]
   )
   useEffect(
      () => {
            !show && setTimeout( ()=> setMustShow(false), opt.duration )   
      }, 
      [show]
   )

   return (
         <div className={`animate__animated animate__${anime[state]} ui-anime`}>
            { mustShow && children}  

            <style global jsx>{`
               .ui-anime {
                  --animate-duration: ${opt.duration};
                  --animate-delay: ${opt.delay};
                  --animate-repeat: ${opt.repeat};
               }
            `}</style>
         </div>
   )
}
