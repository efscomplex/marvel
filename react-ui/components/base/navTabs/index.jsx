import React, {useState} from 'src/react-ui/components/base/navTabs/react'
import {Map} from 'src/react-ui/components/base/navTabs/ui-comp/elements/links/node_modules/src/components'
import uniqid from 'src/react-ui/components/base/navTabs/uniqid'

export default function NavTabs({tabs=[], ...props}) {

   const [activeRef, setActiveRef]
      = useState("#"+tabs[0]?.id)
   
   const getLinkClass
      = ({id, disabled}) => `nav-link ${("#"+id)===activeRef && "show active"} ${disabled && "disabled"}`

   const getContentClass
      = ({id}) => `tab-pane ${("#"+id)===activeRef && "show active"}`

   const onClick
      = ({target}) => setActiveRef(target.getAttribute('href'))

   const Link
      = ({label, disabled, id, to, ...props}) => (
         <li key={uniqid()} className="nav-item">
            <a className={getLinkClass({id, disabled})} data-toggle="tab" href={`#${id}`} onClick={onClick} {...props}>
               {label}
            </a>
         </li> 
      )

   const TabContent
      = ({content, id}) => (
         <div className={getContentClass({id})} id={id}>
            <p>{content}</p>
         </div>
      ) 

   return (
      <div {...props}>
         <ul className="nav nav-tabs">
            <Map items={tabs} comp={Link} />
         </ul>
         <div id="myTabContent" className="tab-content mg-t-1">
            <Map items={tabs} comp={TabContent}/>
         </div>
      </div>
   )
}
