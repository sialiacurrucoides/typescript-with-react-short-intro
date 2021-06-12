import { useContext } from 'react';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';
import { TodosContext } from '../store/todo-context';

const Todos: React.FC = () => {
    const todosContext = useContext(TodosContext);

    return  <ul className={styles.todos}>
        {todosContext.items.map(item => <TodoItem 
        key={item.id} 
        text={item.text}
        deleteTodo={todosContext.removeTodo.bind(null, item.id)}
        />) }
    </ul>;
};

export default Todos;