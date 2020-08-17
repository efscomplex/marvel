function withContext(Comp, Context){

   let WrapComp = ({context, props}) => ( 
      <Context.Consumer>{
         value => {
            context.value = value
            return <Comp {...props}/>
         }
      }</Context.Consumer>
   )
}