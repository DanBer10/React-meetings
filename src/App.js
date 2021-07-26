import './App.css';
import Todo from './Components/Todo';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todos</h1>
        <Todo text="Learn more" />
        <Todo text="Todo2" />
      </header>
    </div>
  );
}

export default App;
