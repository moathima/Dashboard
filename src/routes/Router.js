import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Booking from '../Pages/Booking';
import SellCar from '../Pages/SellCar';
import Settings from '../Pages/Settings';

const Router = () => {
  return (
 
<Routes>
     <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/sellCar' element={<SellCar/>}/>
    <Route path='/settings' element={<Settings/>}/>


    </Routes>

    
  )
}

export default Router
