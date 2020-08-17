
import {useLocation} from 'react-router-dom'

export default function useHandleLocation(onClick){   
   const {
      pathname } = useLocation()

   const handleCurrentLocation
      = event => {
         pathname === event.target.getAttribute('href')
         && event.preventDefault()
         
         return onClick?.(event)
      }

   return handleCurrentLocation
}