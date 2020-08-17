import styled from 'styled-components'
import withBackground from './hocs/withBackground'

const absPosStyled = `
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
`

const Banner = styled.div`
   --banner-h: ${
      (props) => 'height' in props ? props.height : '50vh'
   };
   width: 100%;
   height: var(--banner-h);

   overflow-y: auto;
   z-index: ${props => props.index};

   ${(props) => ('absolute' in props ? absPosStyled : null)}

  /*  background: ${ props => props.background };
   background-image: ${(props) =>
      'src' in props ? `url('${props.src}')` : null
   };
   background-repeat: ${props => 
      'repeat' in props ? props.repeat : 'no-repeat'
   };
   background-size: cover; */
`

export default withBackground(Banner)