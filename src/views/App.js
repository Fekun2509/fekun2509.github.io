import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React.js
        </p>

        <Mycomponent />
      </header>
    </div>
  );
}

export default App;
