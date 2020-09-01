import {default as header} from 'ui/components/views/Header'
import Nav from 'ui/styled/Nav'
import config from 'static/config'
import Text from 'ui/styled/Text'
import styled from 'styled-components/macro'
import Inline from 'ui/styled/Inline'
import MapRoutes from 'components/base/MapRoutes'
import useToggle from 'ui/hooks/useToggle'
import Navbar from 'ui/components/base/navigation/Navbar'

export default function AppHeader(){
   const {
      state: show,
      handle: onClickShow } = useToggle()
      
   return ( 
      <Header align='center' center gap='1rem' className='text-white bg-dark'>
         <Navbar breakpoint='900' id='AppNav'>
            <Sidebar forwardedAs={Nav} routes={config.routes} slot='vertical'/>
            <Inline center justify='center'>
               <MapRoutes as={Nav} routes={config.routes.slice(0,3)}/>
               <Text height='1em' pd='10px' bg='var(--primary)' color='var(--text-light)' mx='2rem' size='3rem' upper bold>{config.siteTitle}</Text>
               <MapRoutes as={Nav} routes={config.routes.slice(3)}/>
            </Inline>
         </Navbar>
      </Header>
   ) 
}
const Sidebar = styled(MapRoutes)`
   padding: 2rem 1rem;
   flex-direction: column;
   position: absolute;
   z-index: 100;
   background-color: var(--primary);
   border-radius: 0 0 16px 6px;
   @media (min-width: 1101px){ 
      display: none;
   }
`  
const Header = styled(header)` 
   padding: .6rem 1.4rem;
   #AppNav{
      a:hover{ color: var(--primary)}
   }
`