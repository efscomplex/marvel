import React from 'src/react-ui/components/views/cards/react'
import Grid from 'src/react-ui/components/views/cards/src/components/base/Grid'
import {merge} from 'src/react-ui/components/views/cards/src/components/resources'

function CardItem(
   { title, subtitle, description, inline, src, svg, actions, link, ...props }
){

   props = merge(props,{
      className: inline ? "card-item card-inline" :  "card-item",
      cols:inline ? "min-content 1fr" : "1fr",
      rows:  inline ? "1fr" :  "auto",
      gap: "2rem"
   })
   
   return (
      <Grid {...props}>
            <div className="card-header">
               <a href={link} target="_blank" rel="noopener noreferrer">
                  {  svg }
                  {  src && <img src={src} alt="cardImage" className="img"/>}
               </a>
            </div>
            <main className="card-body">
               { title && <h2 className="card-title">{title}</h2>}
               { subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
               {description && <div className="card-text">
                  <p className="card-description">{description}</p>
               </div>}
            </main>
            { <div className="card-footer">
               { actions }
            </div>}
      </Grid>
   )
}

export default CardItem