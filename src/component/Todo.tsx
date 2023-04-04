import * as React from "react";
import { useAppSelector } from "redux/store/hook";
import { selectTodos } from "redux/selector/todos";
import { TodoState } from "redux/reducer/todoReducer";

export interface ITodo {
    todos: () => void;
    onAdd: (todo: string) => void;
    onRemove: (todo: string) => void;
    onUpdate: (todo: string, index: number) => void;
}

const Todo: React.FunctionComponent<ITodo> = (props) => {
    const [inputVal, setInputVal] = React.useState("");
    const { todos, onAdd, onRemove, onUpdate } = props;

    let list;
    const todoList = useAppSelector(selectTodos);

    React.useEffect(() => {
        todos();
    }, []);

    if (todoList && todoList.length > 0) {
        list = todoList.map((item: string, index: number) => (
            <li key={index}>{item}</li>
        ));
    } else {
        list = <p>Loading...</p>;
    }

    const hanldeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputVal(e.target.value);

    return (
        <div className="">
            <ul>{list}</ul>
            <input type="text" />
            <button>Add</button>
            <button>Edit</button>
            <button>Remove</button>
        </div>
    );
};

export default Todo;
