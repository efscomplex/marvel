import {useReducer} from 'src/react-ui/hooks/react'

//const ON_BREAK = "ON_BREAK"
const ON_SMARTPHONE = "ON_SMARTPHONE"
const ON_TABLET = "ON_TABLET"
const ON_DESKTOP = "ON_DESKTOP"
const SMARTPHONE = 375
const TABLET = 675
const DESKTOP = 975

function useWinResize(opts={ onResize:null, reducer:null, onBreak: {}}){
   const getDevice
      = () => {
         if (window.innerWidth < SMARTPHONE){
            return "smartphone"
         } else if (window.innerWidth < TABLET){
            return "tablet"
         } else {
            return "desktop"
         }
      }

   const sizeReducer
      = (state, {type}) => {
         switch(type){
            case ON_SMARTPHONE:
               // eslint-disable-next-line no-unused-expressions
               opts.onBreak.smartphone?.()
               console.log('break to smartphone');
               return { mode: "smartphone" }
            case TABLET:
               console.log('break to tablet');
               // eslint-disable-next-line no-unused-expressions
               opts.onBreak.tablet?.()
               return { mode: "tablet" }
            case DESKTOP:
               console.log('break to desktop')
               // eslint-disable-next-line no-unused-expressions
               opts.onBreak.desktop?.()
               return { mode: "desktop" }
            default:
               return state
         }
         
      }
   const [
      state,
      dispatch ] = useReducer(sizeReducer, {mode:getDevice()})
   
   let resizeHandle=null

   if(opts.onBreak){
      const setState 
         = () => {
            console.log(window.innerWidth,SMARTPHONE);
            
            if(window.innerWidth === SMARTPHONE && state.mode!=="smartphone")
               dispatch({type:ON_SMARTPHONE})
            if(window.innerWidth === TABLET && state.mode!=="tablet")
               dispatch({type:ON_TABLET})
            if(window.innerWidth === DESKTOP && state.mode!=="desktop")
               dispatch({type:ON_DESKTOP})
         }
      let onresize
         = window.onresize
         
      resizeHandle = ()=>{
            // eslint-disable-next-line no-unused-expressions
            onresize?.()
            return setState()
         }
         
   }
      
   if(opts.onResize) 
      resizeHandle = opts.onResize
   
   window.onresize = resizeHandle
}

export default useWinResize