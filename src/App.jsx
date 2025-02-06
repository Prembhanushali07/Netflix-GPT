import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('namast js');

  const changeMessage = () => {
    setMessage('Hello, React!');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default App;
