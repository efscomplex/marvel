import AppContext from 'react-ui/context/AppContext'
import withContext from './withContext'

export default Comp => withContext(Comp, AppContext)