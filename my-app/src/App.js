
import './App.css';
import Header from './components/Header';
import User from './components/User'
import Counter  from './components/Counter';
import InputExample from './components/InputExample';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>My first react app!</h1>
      <User />
      <hr />
      <br />
      <Counter />
      <hr /> <br />
      <InputExample />
    </div>
  );
}

export default App;
