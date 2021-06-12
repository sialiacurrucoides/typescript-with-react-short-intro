import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<{text: string, deleteTodo: () => void}> = ({text, deleteTodo}) => {

    return <li className={styles.item} onClick={deleteTodo}>{text}</li>;
};

export default TodoItem;
