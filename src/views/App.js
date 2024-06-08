import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with React.js
        </p>

        {/* <Mycomponent /> */}
        <ListTodo />

      </header>

      <ToastContainer />
    </div>
  );
}

export default App;
