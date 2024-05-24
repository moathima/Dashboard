import React from 'react';

import '../styles/dashboard.css';
import SingleCard from '../Componants/reuseable/SingleCard';
import CarStatsChart from '../charts/CarStatsChart';
import MileChart from '../charts/MileChart';
import RecommendCarCard from '../Componants/UI/RecommendCarCard';
import recommedCarsData from '../assets/dummy-data/recommendCars'

const carObj={
  title:"Total Cars",
  totalNumber:750,
  icon:"ri-police-car-line",
};

const tripObj={
  title:"Daily Trips",
  totalNumber:1967,
  icon:"ri-steering-2-line",
};

const clientObj={
  title:"Client Annually",
  totalNumber:'85K',
  icon:"ri-user-line",
};

const distanceObj={
  title:"Kilometers Daily",
  totalNumber:2167,
  icon:"ri-timer-flash-line",
};



const Dashboard = () => {
  return (
    <div className='dashboard'>

      <div className="dashboard-wrapper">
        <div className="dashboard-cards">
          <SingleCard item={carObj}/>
          <SingleCard item={tripObj}/>
          <SingleCard item={clientObj}/>
          <SingleCard item={distanceObj}/>
        </div>

<div className="statics">
  <div className="stats">
    <h3 className='stats-title'>Miles Statistics</h3>
   <MileChart/>
  </div>

  <div className="stats">
    <h3 className='stats-title'>Car Statistics</h3>
   <CarStatsChart/>
  </div>
</div>

<div className="recommend-cars-wrapper">
 {
  recommedCarsData.map(item=><RecommendCarCard item={item} key={item.id}/>)
 }
</div>




      </div>
      
    </div>
  )
}

export default Dashboard
