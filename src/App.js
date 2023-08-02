import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, decrement, increment, removeLastTodo } from './vanillaRedux/mainReducer';

function App() {
  const count = useSelector(state => state.main.count);
  const todos = useSelector(state => state.main.todos);
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

      <ul>
        {todos.map(todo => 
          <li className='item' key={todo}>{todo}</li>  
        )}
      </ul>
    </div>
  );
}

export default App;
