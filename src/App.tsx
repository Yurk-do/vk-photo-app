import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import AuthPage from './components/authPage/AuthPage';
import RegistrationPage from './components/registrationPage/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        <li>
            <Link to='/registration'>Registration</Link>
          </li>
        </ul>
      </nav>

      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/authPage' exact>
            <AuthPage />
          </Route>
          <Route path='/registration' exact>
            <RegistrationPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
