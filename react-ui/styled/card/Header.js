import styled from 'styled-components'

import {
   cssColorTheme,
   cssText,
   cssPaddings,
   cssTextAlign,
} from 'react-ui/styled/mixins'

export default styled.header`
   padding-bottom: 1.4rem;

   ${cssColorTheme}
   ${cssPaddings}
   ${cssTextAlign}
   ${cssText}
`
