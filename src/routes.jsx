import {  Route, Routes as Switch } from 'react-router-dom';
// import React from 'react'
import Login from './login';
import DashboardHr from './dashboardhr';

function Routes() {
  return (
    <Switch>
       <Route path='/' element={<Login/>}/>
       <Route path='/dashboard' element={<DashboardHr/>}/>
    </Switch>
  )
}

export default Routes