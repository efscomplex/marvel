import styled from 'styled-components'
import {
   themedAttr
} from 'react-ui/styled/utils'

const Table = styled.table ``

const Head = styled.thead `
   ${themedAttr('font-weight','bold')}
   ${themedAttr('color',null)}
   ${themedAttr('background-color',null)}
`
const Body = styled.tbody `
   ${themedAttr('color',null)}
   ${themedAttr('background-color',null)}
`
const Foot = styled.tfoot `
   ${themedAttr('color',null)}
   ${themedAttr('background-color',null)}
`

Table.Head = Head
Table.Body = Body
Table.Foot = Foot

export default Table