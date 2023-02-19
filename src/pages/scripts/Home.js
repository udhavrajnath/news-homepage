import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='container-fluid'>
        <div className='Homepage'>
            <div className='topbar'></div>
            <div className='mainNews'>
                <div className='left'>
                  <div className='imageMain'></div>
                  <div className='lowerText'>
                    <div className='rightLowerText'></div>
                    <div className='leftLowerText'></div>
                  </div>
                </div>
                <div className='right'></div>
            </div>
            <div className='topics'>
                <div className='topicContent'>
                  <div className='topicImg'></div>
                  <div className='TopicCntn'>
                  <div className='TopicTitle'></div>
                    <div className='TopicDesc'></div>
                  </div>

                </div>
                <div className='topicContent'>
                  <div className='topicImg'></div>
                  <div className='TopicCntn'>
                  <div className='TopicTitle'></div>
                    <div className='TopicDesc'></div>
                  </div>

                </div>
                <div className='topicContent'>
                  <div className='topicImg'></div>
                  <div className='TopicCntn'>
                    <div className='TopicTitle'></div>
                    <div className='TopicDesc'></div>
                  </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Home