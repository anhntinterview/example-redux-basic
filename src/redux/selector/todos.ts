import { RootState } from "redux/store";
import { TODO_ACTION } from "redux/action/todo.action";

export const selectTodos = (state: RootState) => {
    console.log(`state in selector: `, state.rootReducer.todoReducer);
    return state.rootReducer.todoReducer;
}
