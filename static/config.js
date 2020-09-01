export const siteTitle = 'marvel'
export const url = 'https://gateway.marvel.com'
export const socialIcons = [
   {name:'facebook', href:'www.facebook.com'}, 
   {name:'instagram', href:'www.instagram.com'},
   {name:'twitter', href:'www.twitter.com'},
   {name:'pinterest', href:'www.pinterest.com'}, 
   {name:'heart', href:'/'}
]
export const routes = [
   {href:'/characters', label:'characters', component: null},
   {href:'/comics', label:'comics', component: null},
   {href:'/series', label:'series', component: null},
   {href:'/creators', label:'creators', component: null},
   {href:'/events', label:'events', component: null},
   {href:'/stories', label:'stories', component: null},
]
export default {
   siteTitle,
   socialIcons,
   routes,
}