import React from 'react'
import './style.css'
import NotifController from '../../Controllers/NotifController'

const Notification = ({ id, data, markAsRead}) => {

  return (
    <div className='flex profile-notif'>
        {data}

        <button onClick={() => markAsRead(id)} className='notif-mark-as-read'>Mark as Read</button>
    </div>
  )
}

export default Notification