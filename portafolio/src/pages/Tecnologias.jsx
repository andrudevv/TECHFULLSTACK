import React from 'react'
import Img from '../../public/fondo1.png'
import Mysql from '../../public/mysql.jpg'
import Nodejs from '../../public/nodejs.png'
import Reactt from '../../public/react.jpg'
import Sequelize from '../../public/sequelize.png'
function Tecnologias() {
  return (
    <div   style={{ backgroundImage: `url(${Img})` }}>
      <h1 className='text-white text-3xl text-center pt-10'>Experiencia con tecnologias</h1>
      <div className='flex justify-center items-center min-h-screen'>

        <div className='flex'>

          <div className='flex flex-col items-center space-y-8'>
            <img src={Mysql} alt='Imagen 1' className='w-48 h-48 object-cover rounded-full' />
            <img src={Nodejs} alt='Imagen 2' className='w-48 h-48 object-cover rounded-full' />
          </div>


          <div className='w-8'></div>


          <div className='flex flex-col items-center space-y-8'>
            <img src={Reactt} alt='Imagen 3' className='w-48 h-48 object-cover rounded-full' />
            <img src={Sequelize} alt='Imagen 4' className='w-48 h-48 object-cover rounded-full' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tecnologias