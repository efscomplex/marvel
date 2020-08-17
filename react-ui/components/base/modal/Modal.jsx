import React from 'react'
import merge from 'react-ui/resources/merge'
import style from './styles.module.scss'

export default function Modal ({show = false, onClose, children, ...rest}){
   const getDisplay =  () => 
      show  ? {display:"flex"} : {display:"none"}
   
   const props = merge(
      rest, 
      { className: style.modal, style: getDisplay() }
   )

   return (
      <div className={style.modal} style={getDisplay()} {...props}>
         <div className={style.modalContent}>
            <div className={style.closeModal} onClick={onClose}>&times;</div>
            {children}
         </div>
      </div>
   )

}
