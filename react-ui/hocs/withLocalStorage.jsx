import { InMemoryCache } from 'src/react-ui/hocs/apollo-cache-inmemory';
import { HttpLink } from 'src/react-ui/hocs/apollo-link-http';
import {withApolloClient} from 'src/react-ui/hocs/src/HOCs'

export default function withLocalStorage(WrappedComp, {typeDefs, resolvers}){

   const opts
      = {
         cache: new InMemoryCache(),
         link: new HttpLink({
           uri: "http://localhost:3000/graphql",
           headers: {
             authorization: localStorage.getItem("token")
           }
         }),
         typeDefs,
         resolvers
      }

   return withApolloClient(WrappedComp, opts)
}
