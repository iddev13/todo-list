import React, { useContext } from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import Context from '../../context';

const TodoItem = ({ todo, index, onChangeCheckbox }) => {

	const { removeTodo } = useContext(Context);

	return (
		<li>
			<span className={todo.complited ? "done" : ""}>
				<input
					type="checkbox"
					onChange={() => { onChangeCheckbox(todo.id) }}
					checked={todo.complited}
				/>
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>
			<button
				className="rm"
				onClick={() => { removeTodo(todo.id) }}
			>&times;</button>
		</li>
	)
}

TodoItem.propType = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChangeCheckbox: PropTypes.func.isRequired
}

export default TodoItem;