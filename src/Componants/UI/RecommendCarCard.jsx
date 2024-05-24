import React from 'react'

const RecommendCarCard = (props) => {
    const{carName,retweet,imgUrl,rentPrice,percentage}=props.item
  return (
    <div className="recommend-car-card">
    <div className="recommend-car-top">
      <h5><span><i class="ri-refresh-line"></i></span>{percentage}%Recommended</h5>
    </div>

<div className="recommend-car-img">
  <img src={imgUrl} alt="" />
</div>

<div className="recommend-car-bottom">
  <h4>{carName}</h4>
  <div className='recommend-car-other'>
  <div className='recommend-icons'>
  <p><i class="ri-repeat-line"></i>{retweet}K</p>
  <p><i class="ri-settings-2-line"></i></p>
    <p><i class="ri-timer-flash-line"></i></p>
  </div>
    <span>${rentPrice}/h</span>
  </div>
</div>


  </div>
  )
}

export default RecommendCarCard
