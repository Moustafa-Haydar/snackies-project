import React from 'react'
import './style.css'

const Notification = ({data}) => {
  return (
    <div className='flex profile-notif'>
        {data}

        <button className='notif-mark-as-read'>Mark as Read</button>
    </div>
  )
}

export default Notification