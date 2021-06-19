import './TodoList.css';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {

	return (
		<ul className="todoList">
			{props.todos.map((elem, index) => {
				return <TodoItem
					todo={elem}
					index={index}
					onChangeCheckbox={props.onChangeCheckbox}
					key={elem.id}
				/>
			})}
		</ul>
	)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChangeCheckbox: PropTypes.func.isRequired
}

export default TodoList;