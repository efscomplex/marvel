import styled from 'styled-components'
import Img from './Img'

export default styled(Img).attrs(
   props => ({
      ratio: 1,
      size: props.size || '4rem'
   })
)`
  /*  width: ${props => props.size || '3rem'}; */
   border-radius: ${props => props.radius || '50%'};
`
