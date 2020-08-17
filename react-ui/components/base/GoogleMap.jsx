import React from 'react'

let googleApiKey = `AIzaSyCLseQuaQQGxfQoUdtKBNFMfc6cyEONrPo`

function GoogleMap({apiKey=googleApiKey}){
      return (
            <iframe 
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11842.678746091246!2d1.8415882000000003!3d42.09312625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sca!2ses!4v1585605860182!5m2!1sca!2ses" 
                  width="600" 
                  height="450" 
                  frameBorder="0" 
                  style={{border:0}}
                   allowFullScreen="" 
                  aria-hidden="false" 
                  tabIndex="0">
            </iframe>
      )
}

export default GoogleMap