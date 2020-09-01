import Template from 'components/core/Template'
import styled, { css, keyframes } from 'styled-components/macro'
import FetchData from 'ui/components/base/FetchData'
import { map, concatAll } from 'rxjs/operators'
import Img from 'ui/styled/images/Img'
import Spinner from 'ui/components/base/Spinner'
import CharacterCard from 'components/base/cards/CharacterCard'
import Map from 'ui/components/utils/Map'
import {from, } from 'rxjs'
import {scan, tap, mergeMap} from 'rxjs/operators'
import Card from 'ui/styled/Card'
import {Flexbox} from 'ui/styled/layout'
import { useRouter } from 'next/router'
import mapTo from 'models'

function Home({params, baseUrl, ...rest}) {
   const router = useRouter()
   let type = router.asPath.slice(1)
   if (type==='') type = 'characters'
	return (
      <div {...rest}>
   	   <Card.Title>{type.toUpperCase()}</Card.Title>
         <FetchData url={`${baseUrl}/${type}${params}`} pipes$={getPipes(type)}>
            {dataResponse}
         </FetchData>
      </div>
	)
}
const dataResponse = ({ error, loading, data=[] }) => {
	if (error) return console.log('ups!', error)
	if (loading) return <Spinner/>
	return <Map as={Flexbox} wrap from={data} template={CharacterCard}/> 
}
const getPipes = type => [
   mergeMap( stream => from(stream.data.results)),
   tap(console.log),
   map(mapTo[type.slice(0,type.length-1)]),
   scan((accum, curr)=>[...accum, curr], []),
]
export function getStaticProps(){
   const params = 
      `?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}` 
      
   return { props: {params, baseUrl: process.env.BASE_URL }}
}  

export default Home
