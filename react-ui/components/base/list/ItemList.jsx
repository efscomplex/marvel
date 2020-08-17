import React from 'react'

function ItemList({items, mr='.8rem', children, ...props}){
   
   return (
      <li {...props}>
         {children}
         <style jsx>{`
            li:not(last-child){
               margin-right: ${mr};
            }   
         `}</style>
      </li>
   )
}

export default ItemList