import React from 'react'
import getIcon from 'react-ui/resources/react-icons'
import merge from 'react-ui/resources/merge'
import uniqid from 'uniqid'
import styles from './styles.scss'

export default function Search({children, ...rest}) {
   const props = merge(rest, { className:styles.input})
   const id = uniqid()

   return (
      <div className={styles.div}>
         <input id={id} type="text" {...props}>
            {children}
         </input>
         <label htmlFor={id} className={styles.label}>
            <Lupe color="white" size="25"/>
         </label>
      </div>
   )
}

const {ion: {Lupe}} = getIcon()
