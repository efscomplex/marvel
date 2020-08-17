import {useReducer, useState} from 'react'

export enum AnimationState {
   inactive,
   paused,
   active,
}

type ActionType = 'start' | 'finish' | 'pause'

type Action = {
   type: ActionType,
   payload?: any
}

const reducer = (state: AnimationState, {type}: Action) => {
   switch(type){
      case 'start':
         return AnimationState.active
      case 'finish':
         return AnimationState.inactive
      case 'pause':
         return AnimationState.paused
      default:
         return state
   }     
}

export default function useAnimation(initial=AnimationState.inactive){

   const [
      state, 
      dispatch ] = useReducer(reducer, initial)

   const [
      activeClass,
      setActiveClass ] = useState<string>('')
   
   const actions = {
      startAnimation: () =>  dispatch({type: 'start'}),
      finishAnimation: () =>  dispatch({type: 'finish'}),
      pauseAnimation: () =>  dispatch({type: 'pause'}),
   }
   
   return {
      state,
      dispatch,
      actions,
      activeClass,
      setActiveClass,
   }
}