import  * as effects from './effects'
import  * as text from './text'
import  * as margins from './margins'
import  * as color from './color'
import  * as sizes from './sizes'
import  * as flex from './flex'
import  * as grid from './grid'

export * from './effects'
export  * from './text'
export  * from './margins'
export  * from './color'
export  * from './sizes'
export  * from './flex'
export  * from './grid'

export default {
   ...effects,
   ...text,
   ...margins,
   ...color,
   ...sizes,
   ...flex,
   ...grid
}  