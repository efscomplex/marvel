import React from 'react'
import Media from '../effects/Media'

const withMedia = (Comp) => 
   (props) => <Media as={Comp} {...props} />

export default withMedia

