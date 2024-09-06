import React from 'react'
import Img from '../../public/fondo.jpg'
function Portafolio() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'  style={{ backgroundImage: `url(${Img})` }}>
        <h2 className='text-6xl  mb-16 font-bold text-white'>Portafolio</h2>
        
        <p className='text-2xl font-bold text-white'>Andru Ramirez</p>
    </div>
  )
}

export default Portafolio;