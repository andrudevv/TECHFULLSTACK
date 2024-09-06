import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <div className="flex  justify-center items-center py-4 bg-gray-800">
            <ul className="flex space-x-12">
                
                <li className="my-2">
                    <Link to="/"  className="font-serif text-3xl mr-20  grid-cols-1 text-purple-300   hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-75 ">TECH</Link>
                </li>
                
                <li className="my-2">
                    <Link to="/inicio" className="font-Pathway-Gothic-One text-3xl text-white  hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-75">Inicio</Link>
                </li>
                <li className="my-2">
                    <Link to="/experiencias" className="font-Pathway-Gothic-One text-3xl text-white  hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-75">Experiencias</Link>
                </li>
                <li className="my-2">
                    <Link to="/tecnologias" className="font-Pathway-Gothic-One text-3xl text-white  hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-75">Tecnologías</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;