import React from 'react'
import { useFetch } from 'react-ui/hooks'

export default function FetchRender({url}){

   const {
      state,
    } = useFetch(url)
    console.log(state.loading)
    //useEffect(()=> console.log('url cambiada: ', url),[url])
   if(state.loading) 
      return <h1> data is fetching... please wait a moment!</h1>
   if (state.error)
      return <h1> Error at Fetch!! {state.error.message}</h1>
   if (state.data.length)
      return (
         <div>
            {state.data.map(
               item =>
                  Object.keys(item).map(
                  key => <span>data Fetched with exit!!!</span>
                  )
            )}
         </div>
      ) 
   return null
}  