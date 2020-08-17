import { useEffect } from 'react'

function useInfinityScroll({
   target, 
   getData,
}){
   const callback = async () => {
      let scrollY = window.scrollY 
      console.log(scrollY)
      await getData()
      if (scrollY !== window.scrollY)
      window.scrollY = scrollY
      console.log(window.scrollY)
   }
   useEffect(
      () => { 
         if (!target) return
         const observer = new IntersectionObserver(
            callback,  
            { rootMargin: '0px 0%'}
         )
         observer.observe(target.current) 
      },
      []
   )
}

export default useInfinityScroll