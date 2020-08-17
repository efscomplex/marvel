import styled from 'styled-components'

function Footer(){
   return (
      <AppFooter className='bg-dark text-white'>
         <small>powered by @efscomplex</small>
      </AppFooter>
   )
}

const AppFooter = styled.footer`
   display:flex;
   justify-content: center;
`
export default Footer