export default function mergeClasses(...rest){
   return [...rest].join(' ').trim()
}