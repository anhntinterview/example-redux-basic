import * as action from "redux/action/todo.action";

export function listTODO(): action.LIST_TODO {
    return {
        type: action.LIST_TODO,
    };
}

export function addTODO(todo: string): action.ADD_TODO_ACTION {
    return {
        type: action.ADD_TODO,
        payload: todo,
    };
}

export function removeTodo(todo: string): action.REMOVE_TODO_ACTION {
    return {
        type: action.REMOVE_TODO,
        payload: todo,
    };
}

export function updateTODO(
    index: number,
    todo: string
): action.UDPATE_TODO_ACTION {
    return {
        type: action.UDPATE_TODO,
        payload: {
            todo,
            index,
        },
    };
}
