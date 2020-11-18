import React, { useState } from 'react'
import { Drawer } from './Drawer'
import { Toolbar } from './Toolbar'

// https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/App.js

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
      <Drawer
        menuIsOpen={hamburgerMenuIsOpen}
        toggleDrawerHandler={toggleDrawer}
      />
    </div>
  )
}
