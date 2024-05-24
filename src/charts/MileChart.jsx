import React from 'react'
import { BarChart, Bar, ResponsiveContainer,XAxis,Tooltip } from 'recharts';

import mileStaticsData from '../assets/dummy-data/mileStatics';

const MileChart = () => {
  return (
    <ResponsiveContainer width='100%'>
    <BarChart data={mileStaticsData}>
      <XAxis dataKey='name' stroke='#2884ff'/>
      <Bar dataKey='mileStats' stroke='#2884ff' fill='#2884ff' barSize={30}/>

      
<Tooltip wrapperClassName='tooltip-style' cursor={false}/>
    </BarChart>
  </ResponsiveContainer>
  )
}

export default MileChart;
