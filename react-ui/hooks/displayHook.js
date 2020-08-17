
function useDisplay(show, display="block"){
   const styles
      = {
         display: show ? display : "none"
      }
   return styles
}
export default useDisplay