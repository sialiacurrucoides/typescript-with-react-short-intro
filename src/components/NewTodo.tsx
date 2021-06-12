import React, { useRef, useContext } from "react";
import styles from './NewTodo.module.css';
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC<{}> = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosContext = useContext(TodosContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0){
            // throw an error
            return;
        }

        todosContext.addTodo(enteredText);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;