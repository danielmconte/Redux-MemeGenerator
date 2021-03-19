
import './App.css';
import Meme from './Meme';
import TodoList from './TodoList'
import MemeForm from './MemeForm';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MemeForm/>
      <Meme/>
      <TodoForm/>
      <TodoList />
      </header>
    </div>
  );
}

export default App;
