export function fromSessionStorage(...items){
   let user = undefined
   for (let item of items){
      let data = sessionStorage.getItem(item)
      try {
         data = JSON.parse(data)
      }catch(err){ 
         alert('error parsing data from session storage: ' + err) 
      }
      user = {...user, [item]: data }  
   }

   return user
}
export function toSessionStorage(item){
   if (!item) return 
   sessionStorage.setItem(user, JSON.stringify(item))
}
export default {
   from: fromSessionStorage,
   to: toSessionStorage
}