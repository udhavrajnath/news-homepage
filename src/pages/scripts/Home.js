import React from 'react'
import '../styles/Home.css'
import Logo from '../../images/logo.svg'

function Home() {
  return (
    <div className='container-fluid'>
        <div className='Homepage'>
            <div className='topbar'>
              <div className='logo'><img id='logo' src={Logo} alt='page logo'/></div>
              <div className='tags'>
                <a href='#'>Home</a>
                <a href='#'>New</a>
                <a href='#'>Popular</a>
                <a href='#'>Trending</a>
                <a href='#'>Categories</a>
              </div>
            </div>
            <div className='mainNews'>
                <div className='left'>
                  <div className='imageMain'>
                    <img id='mainImg' src={require('../../images/image-web-3-desktop.jpg')} alt='main Image'/>
                  </div>
                  <div className='lowerText'>
                  <div className='leftLowerText'>
                      <h1>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className='rightLowerText'>
                      <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                      <button id='ReadBtn'>READ MORE</button>
                    </div>
                    
                  </div>
                </div>
                <div className='right'>
                  <div className='rightTitleDiv'><h1>New</h1></div>
                  <div className='rightCntn'>
                    <h3>Hydrogen VS Electric Cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
                  </div>
                  <div className='rightCntn'>
                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effects of on-demand AI image generation? </p>
                  </div>
                  <div className='rightCntn'>
                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means. </p>
                  </div>

                </div>
            </div>
            <div className='topics'>
                <div className='topicContent'>
                  <div className='topicImg'>
                    <img id='smallImg' src={require('../../images/image-retro-pcs.jpg')}/>
                  </div>
                  <div className='TopicCntn'>
                  <div className='TopicTitle'>01</div>
                    <div className='TopicDesc'>
                      <h3>Reviving Retro PCs </h3>
                      <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                  </div>

                </div>
                <div className='topicContent'>
                  <div className='topicImg'>
                    <img id='smallImg' src={require('../../images/image-top-laptops.jpg')}  alt='image top laptops'/>
                  </div>
                  <div className='TopicCntn'>
                  <div className='TopicTitle'>02</div>
                    <div className='TopicDesc'>
                    <h3>Top 10 Laptops of 2022 </h3>
                      <p>Our best picks for various needs and budgets.</p>
                    </div>
                  </div>

                </div>
                <div className='topicContent'>
                  <div className='topicImg'>
                    <img id='smallImg' src={require('../../images/image-gaming-growth.jpg')}/>
                  </div>
                  <div className='TopicCntn'>
                    <div className='TopicTitle'>03</div>
                    <div className='TopicDesc'>
                      <h3>The Growth of Gaming</h3>
                      <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                  </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Home