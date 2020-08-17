import React from 'src/react-ui/components/views/cardSlider/react'
import {
   Grid,
   Slider,
   Link
} from 'src/react-ui/components/base/node_modules/ui-comp/elements/links/node_modules/src/components'
import './card-slider.scss'

import Card from '../cards/Card'

function CardSlider({children, description,  style, slides, src, link}){
      return (
            <Grid rows="1" cols="2" gap="3rem" style={style} className="card-slider">
                  <Link to={link} external>
                     <img src={src} alt="card-img" style={{width:"100%"}}/>
                  </Link>
                  <Card description={description}/>
                  <Slider slides={slides} controls="bottom">
                        {children}
                  </Slider>
            </Grid>
      )
}

export default CardSlider