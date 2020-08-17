import React from 'react'
import Grid from 'react-ui/components/layout/grid'
import AppContext from 'react-ui/context/AppContext'

export default function App({ value = null, children, ...props }) {
   return (
      <Grid id='app' {...props}>
         {value ? (
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
         ) : (
            children
         )}
      </Grid>
   )
}
