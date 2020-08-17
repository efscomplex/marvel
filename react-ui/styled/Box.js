import styled from 'styled-components'

const dispOpts = ['flex', 'block', 'grid']

export default styled.div`
   display: ${ props => {
      for(let key in props){
         if (dispOpts.includes(key)){
            return props.inline ? 'inline-'+ key : key
         }
      }
      return null
   }}
`