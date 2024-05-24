import React from 'react'
import { NavLink } from 'react-router-dom';
import navLinks from '../../assets/dummy-data/navLinks';
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='sidebar-top'>
<h2> <span><i class="ri-taxi-line"></i> </span>UberX </h2>
      </div>
      <div className="siderbar-content">
        <div className="menu">
          <ul className="nav-list">
          
{
 navLinks.map((item,index)=>(
 <li className='nav-item' key={index}> <NavLink to='/dashboard' className={navClass=>navClass.isActive ?'nav-active nav-link' : 'nav-link'}>
 <span><i className={item.icon}></i></span>{item.display}
 </NavLink></li>
 ))
}

          
          </ul>
        </div>
        <div className="sidebar-bottom">
          <span><i class="ri-logout-circle-r-line"></i> Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
