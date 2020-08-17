import React from 'src/react-ui/hocs/react'
import ApolloClient from 'src/react-ui/hocs/apollo-client'
import { ApolloProvider } from 'src/react-ui/hocs/@apollo/react-hooks'

function withApolloClient(Comp, {uri, ...opt}){
   
   const client 
      = new ApolloClient( {uri, ...opt} )

   const WrappedComp
      = props => (
         <ApolloProvider client={client}>
            <Comp {...props}/>
         </ApolloProvider>
   )

   return WrappedComp
}

export default withApolloClient