export default async function getData(url){
   let data = undefined
   let response = undefined
   let error = null

   try {
      response = await fetch(url)
      data = await response.json()
   } catch (err) {
      error = err
   }

   return {
      data,
      response,
      error
   }
}