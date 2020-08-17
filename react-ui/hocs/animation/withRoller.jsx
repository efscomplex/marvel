import React, {useState} from 'react'
import styled from 'styled-components/macro'

const animation = ` 
      width: 100%;
      @keyframes roller{
         to { transform: translateX(100%); }
      }
      animation: roller 2s linear;
`
const Wrap = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   overflow: hidden;
`

function withRoller(Wrapped){
   if(!Wrapped) return () => null
   
   return props => {
      const [
         order,
         setOrder ] = useState(false)
   
      const toggleOrder = () => {
         setOrder(!order)
      }

      return (
         <Wrap onAnimationEnd={toggleOrder}>
            <Wrapped  css={animation} style={{order: order ? 0 : 1}} {...props}/>
            <Wrapped css={animation}  style={{order: order ? 1 : 0}}{...props}/>
         </Wrap>
      )
   }
}
export default withRoller
