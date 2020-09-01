import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {from} from 'rxjs'
import { map, scan } from 'rxjs/operators'
import withActiveClass from 'ui/hocs/withActiveClass'
import { useRouter } from 'next/router'

const ELink = ({href, label, ...props}) => {
   const router = useRouter()
   const handleClick = to => event => {
      event.preventDefault()
      router.push('/',to)
   }
   return (
      <li key={href} {...props}>
         <a onClick={handleClick(href)}>{label}</a>
      </li>
   )
}
const Link = withActiveClass(ELink)

export default function MapRoutes({as, routes, ...props}){
   const [
      jsxEl, setJsxEl ] = useState([])

   useEffect(
      () => { 
         const obs= from(routes).pipe(
            map( (route,i) => <Link key={i} {...route}/>),
            scan((acc, curr)=>[...acc, curr], [])
         )
         const subs = obs.subscribe(setJsxEl)
         return () => subs.unsubscribe()
      }, []
   )
   
   return as 
      ? <Wrap as={as} {...props}>{jsxEl}</Wrap>
      : jsxEl
}

const Wrap = styled('nav')`
`