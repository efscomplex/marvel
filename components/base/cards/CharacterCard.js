import React from 'react';
import styled, {css} from 'styled-components'
import Card from 'ui/styled/Card'
import Img from 'ui/styled/images/Img'

function ShowcaseCard({thumbnail, name, id }){
   return (
      <StyledCard>
         <Card.Text center bg='var(--primary)' color='white'>
            {name}
         </Card.Text>
         <Img width='100%' src={thumbnail}/>
      </StyledCard>
   )
}
const StyledCard = styled(Card)`
   will-change: scale;
   transition: transform linear .35s;
   &:hover {
      transform: scale(1.175);
   }
`
export default ShowcaseCard