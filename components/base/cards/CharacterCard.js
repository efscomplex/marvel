import React from 'react';
import styled, {css} from 'styled-components'
import Card from 'ui/styled/Card'
import Img from 'ui/styled/images/Img'

function ShowcaseCard({thumbnail, name, id }){
   return (
      <Card>
         <Card.Header>
            <Card.Text>
               {name}
            </Card.Text>
         </Card.Header>
         <Img src={thumbnail}/>
      </Card>
   )
}
export default ShowcaseCard