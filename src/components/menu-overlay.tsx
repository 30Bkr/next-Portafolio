import React from 'react'
import NavigateLink from './navLink'

const MenuOverlay = ({ links } : any) => {
  return (
    <ul className='flex flex-col py-4 items-center '>
      {links.map((link : any, index : any)=> (
        <li key={index}>
          <NavigateLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay