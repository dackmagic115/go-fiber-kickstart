import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id'} exact component={UserEdit} />

      </BrowserRouter>
    </div>
  );
}

export default App;
