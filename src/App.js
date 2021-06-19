import TodoList from './components/todo/TodoList';
import './App.css';
import React, { useEffect, useState, Suspense } from 'react';
import Context from './context';
import Loader from './common/loader/Loader';
import Modal from './common/modal/Modal';
import ThemeBtn from './common/theme/ThemeBtn';

const AddTodo = React.lazy(() => import('./components/todo/AddTodo'));


function App() {

  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
        }, 1000);
        setLoading(false)
      })
  }, [])

  const onChangeCheckbox = (id) => {
    console.log('todo id: ' + id);
    setTodos(
      todos.map(elem => {
        if (elem.id === id) {
          elem.complited = !elem.complited
        }
        return elem;
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(elem => elem.id !== id))
  }

  const addTodo = (title) => {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React TODO</h1>
        <Modal />
        <Suspense fallback={<div>Загрузка...</div>}>
          <AddTodo onCreate={addTodo} />
        </Suspense>
        {loading && <Loader />}
        {todos.length
          ? (<TodoList todos={todos} onChangeCheckbox={onChangeCheckbox} />)
          : loading ? null : (<p>No Todos!</p>)
        }
      </div>
      <ThemeBtn />
    </Context.Provider>
  );
}

export default App;
