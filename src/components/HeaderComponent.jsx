import React from 'react'

import './HeaderComponent.scss'
import icon from './../assets/images/light-logo.png'
import NavButton from './NavButtons'
import { useState } from 'react'

export default function HeaderComponent() {
    const [menus] = useState([
        {name: 'Name', link: '#', classname: 'name'},
        {name: 'Home', link: '#', classname: 'home'}
    ])
  return (
    <div class="nav-container">
        <div class="weblogo">
            <a class="iconlogo navbar-brand" href="#">
            <img src={icon} alt="" height="48"/>
            </a>
        </div>
        <div class="nav-buttons">
            <ul class="nav-list">
                <NavButton menus={menus}/>
            </ul>
        </div>
    </div>
  )
}