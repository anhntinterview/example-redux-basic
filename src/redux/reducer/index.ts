import { combineReducers } from "redux";
import todoReducer from "redux/reducer/todoReducer";

const rootReducer = combineReducers({
    todoReducer,
});

export default rootReducer;
