export type ActionType = 'start' | 'finish' | 'pause'

export interface IAnimation {
   enter: string;
   leave: string;
   delay?: number;
   duration: number; 
}
   
export type Action = {
   type: ActionType,
   payload?: any
}

export enum AnimationState {
   inactive,
   paused,
   active,
}


