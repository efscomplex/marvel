import styled, {css} from 'styled-components'

import Title from 'react-ui/styled/Title'
import Text from 'react-ui/styled/Text'
import Img from 'react-ui/styled/images/Img'
import Grid from 'react-ui/components/layout/grid'

import Body from './Body'
import Header from './Header'
import Footer from './Footer'

import {
   cssColorTheme,
   cssText,
   cssMargins,
   cssPaddings,
} from 'react-ui/styled/mixins'

const cssCardAlign = css `
   text-align: ${ props => props.textAlign};
   text-align: ${ props => 'centerText' in props ? 'center' : null };
   text-align: ${ props => 'leftText' in props ? 'left' : null };
   text-align: ${ props => 'rightText' in props ? 'right' : null };
   text-align: ${ props => 'justifyText' in props ? 'justify' : null };
`

const Card = styled(Grid)`
   width: ${(props) => ('width' in props ? props.width : null)};
   border-radius: ${(props) => (props.br ? props.br : '5px')};
   ${cssText}
   ${cssCardAlign}
   ${cssColorTheme}
   ${cssMargins}
   ${cssPaddings}
`

Card.Title = Title
Card.Body = Body
Card.Header = Header
Card.Footer = Footer
Card.Text = Text
Card.Img = Img

export { Title }
export { Text }
export { Img }
export { Card }

export default Card
