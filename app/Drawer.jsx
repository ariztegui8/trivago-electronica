"use client";
import React, { useState } from 'react'
import Product from './components/Product';
import Carrousel from './components/Carrousel';
import Link from 'next/link';


const Drawer = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={drawerOpen} onChange={() => setDrawerOpen(!drawerOpen)}/>
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link href="/">Trivago Electronic</Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal p-0 flex gap-1">
                {/* Navbar menu content here */}
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>


          {/* <Carrousel />

          <Product /> */}

        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link onClick={handleClick} href='/'>Home</Link>
            </li>
            <li>
              <Link onClick={handleClick} href='/about'>About</Link>
            </li>
            <li>
              <Link onClick={handleClick} href='/contact'>Contact</Link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}

export default Drawer