import {useState, useEffect} from 'src/react-ui/hooks/react'

export default function useFetch(url, opts){
   const status
      = {loading: true, error: null, data: []}

   const [
      state,
      setState
   ] = useState(status)

   useEffect(
      () => {
         fetch(url, opts)
            .then( response => {
               setState({loading:false, error:null, data:[]})
               return response.json()
            })
            .then( data => setState({loading:false, error:null, data}) )
            .catch( error => setState({loading:false, error, data:[]}) )
      },
      [url, opts]
   )

   return {
      state, 
      setState
   }
}