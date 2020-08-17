import React from 'react'
import styled, { css } from 'styled-components'
import { cssAlignSelf } from 'react-ui/styled/mixins'

const cssCentered = css `
   justify-content: center;
   align-items: center;
`

const Flex = styled.div`
   display: ${props => 'inline' in props ? 'inline-flex' : 'flex' };
   flex-direction: ${props => props.column ? 'column' : null };
   flex-wrap: ${props => 'wrap' in props ? 'wrap' : null };
   gap: ${props => 'gap' in props ? props.gap : null };
   align-items: ${props => 'align' in props ? props.align : null };
   justify-content: ${props => 'justify' in props ? props.justify : null };
   ${props => 'centered' in props ? cssCentered : ''}
   ${cssAlignSelf}
`

export default function FlexBox({as='div', children, ...props}){ 
   let childs = React.Children.map( 
      children, child => { 
         if (!child || !child?.props) return child

         let newChild = {
            ...child, 
            props: {
               ...child.props, 
               style: { 
                  ...child.props.style, 
                  order: child.props.order || null,
                  alignSelf: child.props.align || null,
                  flexBasis: child.props.basis || null
               }   
            }
         }

         return newChild
      }
   )
   
   return (
      <Flex as={as} {...props}>
         {childs}
      </Flex>
   )
}
