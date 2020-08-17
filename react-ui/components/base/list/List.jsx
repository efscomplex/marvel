import React from "react"
import ListItem from './ItemList'
import FlexBox from 'react-ui/components/layout/flexbox'
import Map from 'react-ui/components/utils//Map'

function List({as="ul", row, items, children, style, decoration=false, ...props}){

   return(
      <FlexBox as={as} direction={row ? 'row' : "column"} {...props}>
         { children }
         {  
            items &&
            <Map items={items} comp={ListItem} className="list-item" style={style}/> 
         }
      </FlexBox>
   )

}

export default List