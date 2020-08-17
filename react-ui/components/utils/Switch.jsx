import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
//import withTransition from 'react-ui/hocs/animation/withTransition'
import uniqid from 'uniqid'

const attachTransition = route => {
   let Comp = route.component

   if (!Comp) return () => null

   return route.transition 
      ? Comp // must add a transition hoc...
      : Comp
}

function SwitchPage({routes, fallback}){
   
   const ElementRoutes = routes.map( route => {
      const Comp = attachTransition(route)

      return (
         <Route exact={route.exact} key={uniqid()} path={route.href || route.path || route.to}>
            <Comp/>
         </Route>
      )
   })

   return (
      <Suspense fallback={fallback}>
         <Switch>
            {ElementRoutes}
         </Switch>
      </Suspense>
   )
}

SwitchPage
   .defaultProps = {fallback: 'Loading...'}

export default SwitchPage