import users from 'src/react-ui/resources/data/users'

export default function checkUser( item = {} ){
   let promise = new Promise( (res, rej) => {
      if (!item?.email || !item?.password)
         rej('no user data was provided to check it in data base')

      const user = users.find( 
         user => ( item.email === user.email)  && ( item.password === user.password)
      )

      !!user ? res(user) : rej("No user was found for that password and email")}
   )

   return promise
}