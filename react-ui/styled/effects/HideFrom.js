import styled from 'styled-components'
import { cssHideFromProps } from '../mixins'

export default styled.div.attrs(
   props => ({
      from: props.from || '700'
   })
)`
   ${props => cssHideFromProps(props.from)}
`