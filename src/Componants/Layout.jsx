import React from 'react'
import Router from '../routes/Router';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';
import Dashboard from '../Pages/Dashboard';

const Layout = () => {
  return (
    <div className='Layout'>
      <Sidebar/>
      <div className='main-layout'>
<TopNav/>

<div className="content">
  <Router/>

</div>
      </div>
    </div>
  )
}

export default Layout
