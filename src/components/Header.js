
import {NavLink} from 'react-router-dom';

import Home from '../pages/Home';
import Tourism from '../pages/Tourism';
import Fitness from '../pages/Fitness';
import Technology from '../pages/Technology';
import Bollywood from '../pages/Bollywood';
import Food from '../pages/Food'
import '../App.css';

export function Header(){
   
    return(
        <div className="Header">
            <div className='site-name'>
                <h2 className='the'>The</h2><h1>Siren</h1>
            </div>

                <nav className='menu'>    
            <NavLink to={'/'} element={<Home/>} style={({ isActive }) => ({
                color: isActive?"tomato":''
              })}>Home</NavLink>
            <NavLink to={'../pages/Tourism'} element={<Tourism/>}  style={({ isActive }) => ({
            
            color: isActive?"tomato":''
              })}  >Tourism</NavLink>
            <NavLink to={'../pages/Fitness'} element={<Fitness/>} style={({ isActive }) => ({
                 color: isActive?"tomato":''
              })} >Fitness</NavLink>
            <NavLink to={'../pages/Technology'} element={<Technology/>} style={({ isActive }) => ({
            
            color: isActive?"tomato":''
              })}>Technology</NavLink>
            <NavLink to={'../pages/Bollywood'} element={<Bollywood/>} style={({ isActive }) => ({
            
            color: isActive?"tomato":''
              })} >Bollywood</NavLink>
            <NavLink to={'../pages/Food'} element={<Food/>} style={({ isActive }) => ({
                color: isActive?"tomato":''
              })}>Food</NavLink>
            </nav>
           
        </div>

    )
}