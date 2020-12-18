import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/loginsignup/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/user' component={Login} />
        <Route path='/admin' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
