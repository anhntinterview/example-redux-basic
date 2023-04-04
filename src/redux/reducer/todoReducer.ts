import * as actions from "redux/action/todo.action";

const data = ["Say hi!", "What is yor name?", "Where are you from?"];

export type  TodoState = Array<string>

const initialState: TodoState = data;

export default function todoReducer(
    state: TodoState = initialState,
    action: actions.TODO_ACTION
) {
    switch (action.type) {
        case actions.LIST_TODO:
            console.log(`state in reducer: `,state);
            
            return state;
        case actions.ADD_TODO:
            return [...state, action.payload];
        case actions.REMOVE_TODO:
            const newRemovedTodos = state.filter(
                (item) => item !== action.payload
            );
            return newRemovedTodos;
        case actions.UDPATE_TODO:
            const newUpdatedTodos = state.map((item, index) =>
                index === action.payload.index ? action.payload.todo : item
            );
            return newUpdatedTodos;
        default:
            return state;
    }
}
