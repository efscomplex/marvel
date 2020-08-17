import React from "react";
import getIcons from 'react-ui/resources/react-icons'
import styled from 'styled-components'
import Icon from 'react-ui/components/base/icon'
import { capitalize } from 'react-ui/resources/utilities'

const Wrap = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   & > * { margin-right: .4rem;}
`

function Socialbar({items, props, ...rest }){   
   const Icons = getIcons(items.map(item=>item.name)) 

   return (
      <Wrap {...rest}>{
         items.map(
            item => <Icon key={item.name} svg={Icons[capitalize(item.name)]} {...props}/>
         )
      }</Wrap>
   )
}

export default styled(Socialbar)`
   
`