import styled from 'styled-components'
export default function Main(){
   return (
      <AppMain>
         <p> Main Content goes here!</p>
      </AppMain>
   )
}
const AppMain = styled.main `
   display: flex;
   justify-content: center;
   margin-top: 30%;
`