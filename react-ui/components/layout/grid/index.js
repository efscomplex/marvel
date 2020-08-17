import React from 'react'
import styled from 'styled-components'
import { cssGrid } from 'react-ui/styled/mixins'

const assignAreaToChild = (child) => {
   if (!child || !child.type) return child
   let style = child.props.style || {}
   if (child.props.area) {
      style = { ...child.props.style, gridArea: child.props.area }
   }
   let props = { ...child.props, style }
   delete props.area

   return React.createElement(child.type, props, child.props.children)
}

function Grid({ children, ...props }) {
   const childs = React.Children.map(children, assignAreaToChild)

   return <div {...props}>{childs}</div>
}

export default styled(Grid)`
   ${cssGrid}
`
