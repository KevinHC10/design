import React from 'react'

export default function NavButton({ menus }) {
  return (
    menus.map(menu => {
        return (
            <li className={menu.classname}>
                <a className='nav-link' href={menu.link}>{menu.name}</a>
            </li>
        )
    })
  )
}
