import React from 'react'
import { Icon } from '@iconify/react';
import * as Scroll from 'react-scroll';


const Hero = () => {
  return (
    <div className='text-center h-full justify-center' >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='text-center h-full'>
        <h1 className='text-center justify-center text-3xl sm:text-5xl font-bold font-mono '>Get a quick summary of any website within seconds,<br /> with <span className='sm:text-7xl text-6xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-600 bg-clip-text text-transparent'>Concisely.ai</span></h1>
        </div>
        <div className='sm:ml-[46%] sm:mt-[10%] text-center ml-40'>
        <Scroll.Link to='#summary' spy={true} delay={100} smooth={true} offset={0} duration={600} style={{"cursor":'pointer'}}>
          <Icon icon="ph:arrow-down" height={80}/>
        </Scroll.Link>

        </div>
    </div>
  )
}

export default Hero;