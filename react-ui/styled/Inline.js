import styled from 'styled-components'
import {styledHoc} from './utils'

export default styled.div`
   display: inline-flex;
   align-items: ${styledHoc('align','flex-end')};
   flex-wrap: ${ props => props.$wrap ? 'wrap': 'nowrap'};
   gap: ${styledHoc('gap',0)}; 
   & > * { 
      margin-left: ${styledHoc('mx','initial')};
      &:last-child {
         margin-right: ${styledHoc('mx','initial')};
      }
   }
`
