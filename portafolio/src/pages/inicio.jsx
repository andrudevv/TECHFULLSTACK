import React from 'react'
import Img from '../../public/fondo1.png'
function Inicio() {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'  style={{ backgroundImage: `url(${Img})` }}>
            <h1 className=' h-[20vh] text-white text-4xl'>¡Hola y Bienvenido!</h1>
            <p className='w-[80vw] text-white text-2xl'>

            Soy Andru Ramirez, un Tecnologo con una pasión por el desarrollo web. En este espacio, podrás descubrir cómo combino creatividad e innovación para ofrecer soluciones efectivas en el desarrollo web. Mi enfoque está en mencionar un poco acerca mis conocimientos.

            Explora mis experiencias para ver ejemplos de mi trabajo y no dudes en consultar sobre algun proyecto de tu interes, si estás interesado en colaborar o simplemente quieres saber más. Estoy aquí para ayudarte.</p>
        </div>
    )
}

export default Inicio;