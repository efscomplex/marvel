import styled, { css, withTheme } from 'styled-components'

const attachThemedAttrs = (comp, css) => styled(comp)`
   color: ${(props) => props.color || props.theme.fg};
   border: ${(props) => props.border || '1px solid ' + props.theme.fg};
   background-color: ${(props) => props.background || props.theme.bg};
   ${css}
`
export const applyValueFromProps = (opts) => (props) => {
   for (let key in opts) {
      if (key in props) return key
   }
   return null
}
export const themed = (comp, childNames = [], css) => {
   const ThemedComp = comp
   ThemedComp.Themed = attachThemedAttrs(withTheme(comp), css)

   let childs = typeof childNames === 'string' ? childNames.split() : childNames

   childs = childs.map(
      (child) => child.charAt(0).toUpperCase() + child.substr(1)
   )

   for (let child of childs) {
      if (child in ThemedComp) {
         ThemedComp[child].Themed = attachThemedAttrs(
            withTheme(ThemedComp[child])
         )
      }
   }

   return ThemedComp
}

export const space = (num, spacer = 1) => {
   const spaces = [0, 1, 2, 3, 4, 5, 6].map((s) => s * spacer)
   return String(spaces[num]) + 'rem'
}

const short = (attr) => {
   let m = new Map([
      ['background-color', 'bg'],
      ['font-weight', 'weight'],
      ['margin-bottom', 'mb'],
      ['padding-bottom', 'pb'],
      ['padding-top', 'pt'],
      ['margin-top', 'mt'],
      ['color', 'color'],
      ['font-size', 'size'],
      ['border-radius', 'radius'],
   ])
   return m.get(attr) || attr
}

export const styledHoc = (attr, value) => (props) =>
   props[attr] || value || 'initial'

export const themedHoc = (attr, value) => (props) =>
   props.theme?.[attr] || value || 'initial'

export const reverse = (theme) => {
   return {
      ...theme,
      fg: theme.bg,
      bg: theme.fg,
   }
}

export const styledAttr = (attr, def = null) =>
   css`
      ${attr}: ${(props) => (props[short(attr)] ? props[short(attr)] : def)}
   `
export const themedAttr = (attr, def = null) =>
   css`
      ${attr}: ${(props) =>
         props.theme[short(attr)] ? props.theme[short(attr)] : def}
   `
