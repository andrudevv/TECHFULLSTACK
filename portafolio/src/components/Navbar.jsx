import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <div className="flex justify-center items-center py-4 bg-gray-800">
            <ul className="flex space-x-12">
                <li className="my-2">
                    <Link to="/inicio" className="font-Pathway-Gothic-One text-3xl text-white">Inicio</Link>
                </li>
                <li className="my-2">
                    <Link to="/experiencias" className="font-Pathway-Gothic-One text-3xl text-white">Experiencias</Link>
                </li>
                <li className="my-2">
                    <Link to="/tecnologias" className="font-Pathway-Gothic-One text-3xl text-white">Tecnologías</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;