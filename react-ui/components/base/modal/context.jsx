import React, {useState, useCallback, createContext} from 'src/react-ui/components/base/modal/react'

const ModalCtxt 
      = createContext(
         { open: false, toggleModal: ()=> {} }
      )

function useModal(){

   const [
      open,
      toggle
   ] = useState(false)

   const toggleModal
      = useCallback(
         () => toggle(state=>!state),
         [toggle]
      )

   const ModalProvider
      = ({children}) => (
         <ModalCtxt.Provider value={{open, toggleModal}}>
            {children}
         </ModalCtxt.Provider>
      )
   
   return { 
      Modal: ModalProvider,
      open, 
      toggleModal }
}

export {useModal, ModalCtxt}