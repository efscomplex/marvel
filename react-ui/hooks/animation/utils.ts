import { IAnimation } from './types'

export const toAnimationClass = (animation: IAnimation | string): IAnimation => {
   if (typeof animation === 'string') return {
        enter: animation,
        leave: animation,
        delay: 0,
        duration: 1000
   }

   return animation
}