import styled from 'styled-components/macro'

export default styled.div`
   display: flex;
   flex-direction: ${ 
      props => {
         if ('direction' in props) return props.direction
         if (('column' in props) || 'col' in props) {
            if ('reverse' in props)
            return 'column-reverse'
            return 'column'
         }else if ('reverse' in props) {
            return 'row-reverse'
         }
      }
   };
   flex-wrap: ${
      props => {
         if('wrap' in props) return 'wrap'
         if('nowrap' in props) return 'nowrap'
         if('wrapReverse' in props) return 'wrap-reverse'
         if ('flexWrap' in props) return props.flexWrap
      }
   };
   justify-content: ${
      props => {
         if('between' in props) return 'space-between'
         if('centerX' in props) return 'center'
         if('center' in props) return 'center'
         if('evenly' in props) return 'space-evenly'
         if('endX' in props) return 'flex-end'
         if('startX' in props) return 'flex-start'
         if('justify' in props) return props.justify
      }
   }; 
   align-items:${
      props => {
         if('startY' in props) return 'flex-start'
         if('centerY' in props) return 'center'
         if('center' in props) return 'center'
         if('endY' in props) return 'flex-end'
         if('baseline' in props) return 'baseline'
         if('align' in props) return props.align
      }
   }; 
   gap: ${ props => props.gap };
`
