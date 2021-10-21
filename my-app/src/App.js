
import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import User from './components/User'
import Counter  from './components/Counter';
import InputExample from './components/InputExample';

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      <Header />
      <h1>My first react app!</h1>
      <User />
      <hr />
      <br />
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)} >Toggle Counter</button>
      <hr /> <br />
      <InputExample />
    </div>
  );
}

export default App;
