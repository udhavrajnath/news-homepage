import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='container-fluid'>
        <div className='Homepage'>
            <div className='topbar'></div>
            <div className='mainNews'>
                <div className='left'></div>
                <div className='right'></div>
            </div>
            <div className='topics'>
                <div className='topicContent'></div>
                <div className='topicContent'></div>
                <div className='topicContent'></div>

            </div>
        </div>
    </div>
  )
}

export default Home