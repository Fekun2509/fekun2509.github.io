import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


import Nav from './Navigation/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />




          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Mycomponent />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailUser />
            </Route>
          </Switch>

        </header>

        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
