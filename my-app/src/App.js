
import './App.css';
import Header from './components/Header';
import User from './components/User'
import Counter  from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My first react app!</h1>
      <User />
      <hr />
      <br />
      <Counter />
    </div>
  );
}

export default App;
