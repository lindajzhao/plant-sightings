import React, { useState } from 'react'
import Drawer from './Drawer'
import Toolbar from './Toolbar'

export const NavBar = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  const toggleDrawer = () => {
    setHamburgerMenuIsOpen(false)
  }

  const openDrawer = () => {
    setHamburgerMenuIsOpen(true)
  }

  return (
    <div className="App">
      <Toolbar openDrawerHandler={openDrawer} />
      <Drawer left={hamburgerMenuIsOpen} toggleDrawerHandler={toggleDrawer} />
    </div>
  )
}
