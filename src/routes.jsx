import {  Route, Routes as Switch } from 'react-router-dom';
// import React from 'react'
import Login from './login';
import DashboardHr from './dashboardhr';
import EduLang from './EduLang';
import NationOverview from './NationOverview';
import Interdepartmentoverview from './Interdepartmentoverview';
import Genderoverview from './genderoverview';
import Experience from './Experience';
import Departmentoverview from './Departmentoverview';


function Routes() {
  return (
    <Switch>
       <Route path='/' element={<Login/>}/>
       <Route path='/dashboard' element={<DashboardHr/>}/>
       <Route path='/dashboard/edulang' element={<EduLang/>}/>
       <Route path='/edulang' element={<EduLang/>}/>
       <Route path='/dashboard/nationoverview' element={<NationOverview/>}/>
       <Route path='/nationoverview' element={<NationOverview/>}/>
       <Route path='/dashboard/interdepartment' element={<Interdepartmentoverview/>}/>
       <Route path='/interdepartment' element={<Interdepartmentoverview/>}/>
       <Route path='/dashboard/genderoverview' element={<Genderoverview/>}/>
       <Route path='/genderoverview' element={<Genderoverview/>}/>
       <Route path='/dashboard/departmentoverview' element={<Departmentoverview/>}/>
       <Route path='/departmentoverview' element={<Departmentoverview/>}/>
       <Route path='/dashboard/experience' element={<Experience/>}/>
       <Route path='/experience' element={<Experience/>}/> 
       
     </Switch>
  )
}

export default Routes