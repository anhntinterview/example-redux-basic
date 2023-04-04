export const LIST_TODO = "TODO/LIST_TODO"
export interface LIST_TODO {
    type: typeof LIST_TODO,
}

export const ADD_TODO = "TODO/ADD_TODO"
export interface ADD_TODO_ACTION {
    type: typeof ADD_TODO,
    payload: string
}

export const REMOVE_TODO = "TODO/REMOVE_TODO"
export interface REMOVE_TODO_ACTION {
    type: typeof REMOVE_TODO,
    payload: string
}

export const UDPATE_TODO = "TODO/UDPATE_TODO"
export interface UDPATE_TODO_ACTION {
    type: typeof UDPATE_TODO,
    payload: {
        todo: string,
        index: number
    },
    
}

export type TODO_ACTION = LIST_TODO | ADD_TODO_ACTION | REMOVE_TODO_ACTION | UDPATE_TODO_ACTION