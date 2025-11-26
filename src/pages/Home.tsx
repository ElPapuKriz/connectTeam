import { useState } from 'react'

import { NavBar } from '../components/NavBar/NavBar'

import { HOME_CARDS } from './Home.data'

import { Capitalize } from '../utils/string'

import '../styles/pages/Home.css'

const Home = () => {
  
  const [user,setUser] = useState('usuario')
  
  return (
    <>
        <h4>Bienvenido, {Capitalize(user)}</h4>
        
        <div className="home">
            {

              HOME_CARDS.map((data)=>(
                <div 
                key={data.id}
                 className="content-home"
                  id={data.id}>

                  <h4>{data.title}</h4>
                  <p>{data.subtitle}</p>
                  
                </div>
              ))

            }
        </div>
        
    </>
  )
}

export default Home ;