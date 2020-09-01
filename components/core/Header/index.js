import Nav from 'ui/styled/Nav'
import config from 'static/config'
import Text from 'ui/styled/Text'
import styled from 'styled-components/macro'
import Inline from 'ui/styled/Inline'
import MapRoutes from 'components/base/MapRoutes'
import useToggle from 'ui/hooks/useToggle'
import Navbar from 'ui/components/base/navigation/Navbar'
import Slider from 'ui/styled/images/Slider'
import Img from 'ui/styled/images/Img'

export default function AppHeader(){
   const {
      state: show,
      handle: onClickShow } = useToggle()
      
   return ( 
      <Header align='center' gap='1rem'>
         <Text height='1em' padding='10px' bg='var(--primary)' color='var(--text-light)' mx='2rem' size='3rem' upper bold>{config.siteTitle}</Text>
         <Navbar breakpoint='900' id='AppNav' className='p-3'>
            <Sidebar forwardedAs={Nav} routes={config.routes} slot='vertical'/>
            <Inline center justify='center'>
               <MapRoutes as={Nav} routes={config.routes}/>
            </Inline>
         </Navbar>
         <Slider style={{height: '40vh'}} controls={controlStyles} slider={{animation: 'fadeIn ease 1s'}}>
            <Img position='top' src='images/marvel-1.png'/>
            <Img position='top' src='images/marvel-2.png'/>
            <Img position='top' src='images/marvel-3.png'/>
         </Slider>
      </Header>
   ) 
}
const controlStyles = {
   size:'50', 
   style:{
      borderRadius: '50%',
      backgroundColor: 'rgba(0,0,0,.7)',
      padding: '1rem',
      fontSize: '2rem',
   }
}
const Sidebar = styled(MapRoutes)`
   padding: 2rem 1rem;
   flex-direction: column;
   position: absolute;
   z-index: 100;
   background-color: var(--dark);
   color: white;
   border-radius: 0 0 16px 6px;
   @media (min-width: 1101px){ 
      display: none;
   }
`  
const Header = styled('div')` 
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: var(--dark);
   color: white;

   #AppNav{
      a:hover{ color: var(--primary)}
   }
   @media (max-width: 1101px){ 
      justify-content: flex-start;
   }
`