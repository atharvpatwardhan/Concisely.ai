import React from 'react'
import { Icon } from '@iconify/react';
import * as Scroll from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex'>
        <div className='text-4xl my-5 mx-5 font-bold font-mono bg-gradient-to-r from-green-500 via-blue-500 to-pink-600 bg-clip-text text-transparent'> Concisely.ai </div>
        <div className='my-5' style={{"marginLeft":"77%"}}>
            <a href='https://github.com/atharvpatwardhan/Concisely.ai' target='_blank'>
              <Icon icon="icon-park-outline:github" height={40} style={{"cursor":'pointer'}} />
            </a>
        </div>
    </div>
  )
}

export default Navbar