import {createContext} from 'src/react-ui/context/react'
import store from 'src/react-ui/context/src/store/store'

const StoreContext
   = createContext(store)

StoreContext.displayName  = "Context Store"

export default StoreContext