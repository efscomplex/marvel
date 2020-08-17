import React from 'react'
import useToggle from 'react-ui/hooks/useToggle'
import Nav from 'react-ui/components/base/navigation/Nav'
import useSlots  from 'react-ui/hooks/useSlots'
import merge from 'react-ui/resources/merge'
import styles from './navbar.module.scss'
import Menu from './Menu'

export default function Navbar({ 
   show = true, sidebar, fluid,  menu, position, children, routes=null,...rest}
) {
   const { Slot, childs } = useSlots(children)
   const props = merge(rest, {
      className:styles.navbar,
      style: {position}
   })
   const {
      state: showNav,
      onToggle: toggleMenu
   } = useToggle(show)

   return (
      <div {...props}>
         <Slot name="menu"> {menu && <Menu color={menu || 'initial'} onClick={toggleMenu}/>} </Slot>
         {  
            showNav && show &&
            <Slot name="nav">
               <Nav className={styles.nav} routes={routes} direction={sidebar ? 'column' : 'row'}/>
               {childs}
            </Slot> 
         }
         <Slot name="actions"/>
      </div>
   )
}