import styled from 'styled-components'

const Banner = styled.div`
   display: ${ props => props.absolute ? 'absolute' : null};
   position: ${ props => props.fixed ? 'fixed' : null};
   position: ${ props => props.sticky ? 'sticky' : null};
   width: 100%;
   height: ${ props => props.height};
   background-image: url(${props => props.src});
   background-position: ${ props => props.position || 'center'};
   background-repeat: ${ props => props.repeat ? 'repeat' : 'no-repeat'};
   background-size: ${ props => props.size || 'cover'};
`
export default Banner