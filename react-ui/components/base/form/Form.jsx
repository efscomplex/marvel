import React from 'react'
import Fieldset from './Fieldset'
import useForm from 'react-ui/hooks/useForm'
import Context from 'react-ui/context/formContext'
import useSlots from 'react-ui/hooks/useSlots'
import Btn from 'react-ui/components/base/Btn'

export default function Form({legend, actions, handle, children, ...props}) {

   const {
      action: { update },
      onSubmit,
      onReset
   } = useForm(handle) 
   
   const { Slot, childs } = useSlots(children)

   return (
      <form onSubmit={onSubmit} onReset={onReset} {...props}>
         <Fieldset legend={legend}>
            <Context.Provider value={update}>{childs}</Context.Provider>
         </Fieldset>
         <Slot name='actions'>
            { actions && <div slot="actions">
               <Btn type='submit' className='btn btn-warning' label="Submit"/>
               <Btn onClick={onReset} className='btn btn-danger' label="Reset"/>
            </div>}
         </Slot>
      </form>
   )
}
