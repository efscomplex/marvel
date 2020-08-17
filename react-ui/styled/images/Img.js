import styled from 'styled-components'

export default styled.img.attrs((props) => ({
   ratio: props.ratio || 9 / 16,
}))`
   display: block;
   margin: ${props => 'center' in props ? 'auto' : null};
   max-width: 100%; 
   width: ${ props => props.width || props.size || null};
   height: ${
      props => props.size && `calc(${props.size} * ${props.ratio})`
   };
   object-position: ${(props) =>
      'position' in props ? props.position : 'center'};
   object-fit: ${ props => props.fit || 'cover'};
`
