import React, {useState} from 'react'
import styles from './styles.module.scss'

function Toggle({id, checked, onToggle, name=null, ...props}) {

   let [isActive, setState ]
      = useState(checked)

   const onClick
      = () => {
         setState(!isActive)
         setTimeout(onToggle, 3000)
      }

   let className  
         = isActive ? "toggle on" : "toggle off"

   return (
      <div className={className + styles.toggle} onClick={onClick} {...props}>
         <input id={id} name={name} type="radio"/>
      </div>
   )
}

export default Toggle