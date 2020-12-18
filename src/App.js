import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserLogin from './components/loginsignup/UserLogin'
import UserSignUp from './components/loginsignup/UserSignUp'
import AdminLogin from './components/loginsignup/AdminLogin'
import AdminSignUp from './components/loginsignup/AdminSignUp'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/user' component={UserLogin} />
        <Route exact path='/user/register' component={UserSignUp} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route exact path='/admin/register' component={AdminSignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
