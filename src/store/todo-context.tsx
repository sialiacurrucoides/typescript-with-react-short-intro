import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObject = {
    items: Todo[];
    addTodo: (text:string) => void;
    removeTodo: (id:string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: (text:string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAddTodo = (text: string) => {
      setTodos(prev => [...prev, new Todo(text)]);
    };
  
    const onDeleteTodo = (todoId: string) => {
      setTodos(prev => prev.filter(todo => todo.id !== todoId));
    };

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: onAddTodo,
        removeTodo: onDeleteTodo
    };

    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
};

export default TodosContextProvider;