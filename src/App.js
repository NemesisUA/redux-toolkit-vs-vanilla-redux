import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';

const addAsyncTodo = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'))
    }, 2000)
  }
}

function App() {
  const count = useSelector(state => state.toolkit.count);
  const todos = useSelector(state => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className='counter'>Count: {count}</h1>
      <button className='btn'
        onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn'
        onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='btn'
        onClick={() => dispatch(addTodo(prompt('Add new todo')))}>Add todo</button>
      <button className='btn'
        onClick={() => dispatch(removeLastTodo())}>Delete last todo</button>

      <button className='btn'
        onClick={() => dispatch(addAsyncTodo())}>add async todo</button>

      <ul>
        {todos.map(todo => 
          <li className='item' key={todo}>{todo}</li>  
        )}
      </ul>
    </div>
  );
}

export default App;
