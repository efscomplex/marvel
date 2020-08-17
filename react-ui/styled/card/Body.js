import styled from 'styled-components'

import {
   cssColorTheme,
   cssText,
   cssPaddings,
   cssTextAlign,
} from 'react-ui/styled/mixins'

export default styled.div`
   font-size: 1em;
   padding-bottom: 1.4rem;

   ${cssColorTheme}
   ${cssPaddings}
   ${cssTextAlign}
   ${cssText}
`
