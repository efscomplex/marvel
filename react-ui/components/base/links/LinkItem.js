import React from 'react'
import Link from './Link'
import styled from 'styled-components'

function LinkItem(props){
   return (
      <li>
         <Link {...props}/>
      </li>
   )
}

export default styled(LinkItem)`

`