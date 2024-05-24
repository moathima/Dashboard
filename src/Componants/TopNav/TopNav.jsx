import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile-02.png';
import './top-nav.css'
const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='top-nav-wrapper'>
        <div className='search-box'>
<input type="text" placeholder='search or type' />
<span><i class="ri-search-line"></i></span>
        </div>
<div className="top-nav-right">
  <span className='notification'>
    <i class="ri-notification-3-line"></i>
<span className='badge'></span>
  </span>
  <div className='profile'>
  <Link to='/settings'><img src={profileImg} alt="" /></Link>
  </div>
</div>
      </div>
      
    </div>
  )
}

export default TopNav
