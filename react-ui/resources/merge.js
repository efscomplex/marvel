export default function merge(clientProps = {}, ownerProps = {}){
      
      const props
         = {
            ...ownerProps,
            ...clientProps,   }
            
      const className
            = (ownerProps.className || "" ) + " " + (clientProps.className || "")

      if (className!==" ")
            props.className = className

      props.style = {...ownerProps.style, ...clientProps.style}

      return props
}
