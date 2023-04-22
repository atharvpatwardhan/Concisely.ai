import React from 'react'
import { Icon } from '@iconify/react';
import * as Scroll from 'react-scroll';


const Hero = () => {
  return (
    <div className='text-center w-full h-full'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
        <h1 className='text-5xl font-bold font-mono '>Get a quick summary of any website within seconds,<br /> with <span className='text-7xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-600 bg-clip-text text-transparent'>Concisely.ai</span></h1>
        </div>
        <div style={{"marginLeft":"46%","marginTop":"10%"}}>
        <Scroll.Link to='#summary' spy={true} delay={100} smooth={true} offset={0} duration={600} style={{"cursor":'pointer'}}>
          <Icon icon="ph:arrow-down" height={80}/>
        </Scroll.Link>

        </div>
    </div>
  )
}

export default Hero;