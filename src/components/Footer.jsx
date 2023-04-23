import React from 'react'

export const Footer = () => {
  return (
    <div style={{"height":"125px"}}>
    <div className='flex my-10 text-xl ' style={{"marginLeft":"42%","marginTop":"5%"}}>
        Made by <span className='font-sans bg-gradient-to-r from-green-500 via-blue-500 to-pink-600 bg-clip-text text-transparent' style={{"marginLeft":"0.6%"}}><a href='https://www.linkedin.com/in/atharv-patwardhan/' target='_blank'>Atharv Patwardhan</a>.</span>
    </div>
    <p className='texl-lg text-center mb-10 '>This page is created as a personal project and is not meant to resemble any real company or service.</p>
    </div>
  )
}
