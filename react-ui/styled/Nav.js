import styled from 'styled-components'

const Nav = styled.nav`
   display: flex;
   justify-content: center;
   align-items: center;
`
const Item = styled.li`
   margin-right: .6rem;
   margin-left: .3rem;
   border-radius: 6px;
   transition: ${ props => props.transition || 
      'background-color linear .2s, color linear .2s, opacity linear .2s'
   };
   &:hover { 
      opacity: .8;
   }
`  
const Link = styled.a `
   padding: .2rem .6rem;
   text-transform: capitalize;
   display:block;  
`

const LinkItem = ({children, props, ...rest}) => {
   return (
      <Item {...props}>
         <Link {...rest}>
            {children}
         </Link>
      </Item> 
   )
}

Nav.LinkItem = LinkItem
Nav.Item = Item
Nav.Link = Link

export default Nav