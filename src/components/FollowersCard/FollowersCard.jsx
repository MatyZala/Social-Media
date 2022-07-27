import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
import { Link } from 'react-router-dom'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Quien te sigue</h3>

        {Followers. map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <Link to={'/profile/'+follower.username}> <span>@{follower.username}</span></Link>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Seguir
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard