import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Logo/BisnesLogo.png"

export const Navbar = () => {
  return (
    <menu className='flex justify-between min-w-full'>
        <img className='w-24 p-4 rounded-full' src={Logo} alt=""/>
        <nav className='flex justify-around p-8'>
            <ul className='flex justify-between w-96'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <button className='rounded-full bg-white'>Login/Logout</button>
            </div>
        </nav>
    </menu>
  )
}
