import styled from 'styled-components/macro'
import { cssAnimatedProps } from '../mixins'

export default function withAnimation(Comp){
   return styled(Comp)`
      ${cssAnimatedProps}
   `
}