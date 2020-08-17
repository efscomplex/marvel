/* import React, {Fragment} from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function getHtmlEl(el){

   const htmlEl
      = `<${el}>
         hello guys!!
      </${el}>`

   return (
      ({...props}) => 
         <Fragment>
            {ReactHtmlParser(htmlEl)}
         </Fragment>
   )
}
export function HtmlEl({el="div",children,...props}){
   
   const htmlEl
      = `<${el}>
            ${children}
      </${el}>`
   return (
      <Fragment>
         {ReactHtmlParser(htmlEl)}
      </Fragment>
   )
}

export {getHtmlEl} */