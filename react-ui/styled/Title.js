import styled from 'styled-components'
import {
   cssColorTheme,
   cssText,
   cssMargins,
   cssTextAlign,
} from 'react-ui/styled/mixins'

export default styled.h1 `
   font-size: 2em;
   font-weight: bold;
   text-transform: capitalize;
   margin-bottom: 1em;
   
   ${cssMargins}
   ${cssTextAlign}
   ${cssText}
   ${cssColorTheme}
`