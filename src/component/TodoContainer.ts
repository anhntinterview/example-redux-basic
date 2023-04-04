import {
    addTODO,
    listTODO,
    removeTodo,
    updateTODO,
} from "redux/action/actionCreator";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Todo from "./Todo";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    todos: () => {
        dispatch(listTODO());
    },
    onAdd: (todo: string) => {
        dispatch(addTODO(todo));
    },
    onRemove: (todo: string) => {
        dispatch(removeTodo(todo));
    },
    onUpdate: (todo: string, index: number) => {
        dispatch(updateTODO(index, todo));
    },
});

export default connect(null, mapDispatchToProps)(Todo);
