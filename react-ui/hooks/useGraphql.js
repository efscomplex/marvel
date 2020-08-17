import { graphql } from 'src/react-ui/hooks/graphql'

function useGraphhql(schema){
 
   const queryData
      = query => graphql(schema, query)
   
   return queryData
}

export default useGraphhql

