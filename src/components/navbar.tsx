'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import NavigateLink from './navLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './menu-overlay';
import Image from 'next/image';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  }
]

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav 
    className='fixed top-0 left-0 right-0s z-30 bg-[#121212] bg-opacity-100  w-screen pr-4 sm:pr-0 sm:w-full'
    >
      <div 
      className='flex items-center justify-between flex-wrap mx-auto px-4 py-4'
      >
        <Link 
        href='/' 
        className='text-2xl text-white font-semibold'
        >
          <Image 
          src='/images/logobkr.png' 
          alt='logo bkr'
          width={60}
          height={60}
          className='rounded-full'/>
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen?(
              <button 
              onClick={()=> setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hoverLborder-white text-slate-200' 
              type='button' 
              title='optios'><Bars3Icon className='h-5 w-5'/></button>
            ): (
              <button 
              onClick={()=> setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hoverLborder-white text-slate-200' 
              type='button' title='optios'><XMarkIcon className='h-5 w-5'/></button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
            {
              navLinks.map((link, index)=> (
                <li key={index}>
                  <NavigateLink href={link.path} title={link.title}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div> 
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
