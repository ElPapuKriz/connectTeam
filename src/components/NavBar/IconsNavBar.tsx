import { useState } from 'react';

import { Link } from 'react-router-dom';

import { NAV_ITEMS } from './NavBar.data';

import '@/styles/components/NavBar.css';


export const IconsNavBar = () => {

  const [hoveredId, setHoveredId] = useState('')

  return (
    <div className='navbar'>

      {/* Nav bar */}
      {NAV_ITEMS.map((item) => (

        <Link to={item.to}>

          <svg
            key={item.id}
            onMouseEnter={() => { setHoveredId(item.id) }}
            onMouseLeave={() => { setHoveredId('') }}
            fill={(hoveredId === item.id) ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0,0,0,0.5)'}
            viewBox={item.viewBox}
            role="img"
            aria-label={item.label}
          >
            {item.pathsvg}
          </svg>

        </Link>



      ))}

    </div>
  )
}