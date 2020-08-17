import React, {useEffect} from 'src/react-ui/components/base/dropdown/react'
import useToggle from 'src/react-ui/hooks/useToggle'
import uniqid from 'src/react-ui/components/base/dropdown/uniqid'

export default function Dropdown({label="Dropdown",items}) {
   
   const {
      state: show,
      setState: setShow,
      onToggle: onToggleShow
   } = useToggle()

   const getvisibility
      = _ => show ? "show" : ""

   useEffect(
      () => {
         window.onclick 
            = show ? () =>  setShow(!show) : null },
      [show, setShow]
   )

   const styles
      = {position: "absolute", transform: "translate3d(0px, 38px, 0px)", top: "0px", left: "0px", willChange: "transform"}

   return (
      <li className={`nav-item dropdown ${getvisibility()}`} onClick={onToggleShow}>
         <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="true">
            {label}
         </a>
         <div className={`dropdown-menu ${getvisibility()}`} x-placement="bottom-start" style={styles}>
            {items.map(
               item => (
                  item.label 
                     ? <a key={uniqid()} className="dropdown-item" href={item.href}>{item.label}</a>
                     : <div key={uniqid()} className="dropdown-divider"></div>
               )
            )}
         </div>
    </li>
   )
}
