import styled from 'styled-components'
import Nav from './Nav'

const Breadcrumbs = styled(Nav) `
   position: relative;
   a { border-bottom: 1px solid transparent; }
   a:hover { 
      border-bottom: 1px solid var(--text, #000);
      cursor: pointer;
   }
   a:after {
      content: '/';
      position: absolute;
      margin: 0 1rem;
      border: 1px solid transparent;
   }
   & > *:last-of-type a:after { content: ''; } 
   & > *:last-of-type:after { content: '';}
` 

Object.assign(Nav, Breadcrumbs )

export default Breadcrumbs