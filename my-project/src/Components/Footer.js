import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <menu className=''>
        <ul className='flex justify-around'>
            <li>
                <Link to="/team">Team</Link>
            </li>
            <li>
                <Link to="/info">Info</Link>
            </li>
        </ul>
    </menu>
  )
}
