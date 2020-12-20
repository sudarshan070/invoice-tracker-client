import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserLogin from './components/loginsignup/UserLogin'
import UserSignUp from './components/loginsignup/UserSignUp'
import AdminLogin from './components/loginsignup/AdminLogin'
import AdminSignUp from './components/loginsignup/AdminSignUp'
import Axios from 'axios'
import { BASE_URL } from './utils/api'
import UserDashboard from './components/invoices/UserDashboard'
import CreateInvoice from './components/invoices/CreateInvoice'



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState(null)


  useEffect(() => {
    if (localStorage.token) {
      Axios.get(`${BASE_URL}/users`, { headers: { authorization: localStorage.token } }).then(res => {
        const user = res.data.user
        setUserInfo(user)
        setIsLoggedIn(true)
      }).catch(err => setIsLoggedIn(false))
    } else {
      setIsLoggedIn(false)
    }
  }, [isLoggedIn])



  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false)
  }

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} userInfo={userInfo} />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/user' render={() => <UserLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/user/register' component={UserSignUp} />
        <Route exact path='/admin' component={AdminLogin} />
        <Route exact path='/admin/register' component={AdminSignUp} />
        <Route exact path='/user/dashboard' component={UserDashboard} />
        <Route exact path='/user/createinvoice' component={CreateInvoice} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
