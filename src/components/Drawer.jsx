import React from 'react'
import { Link } from 'react-router-dom'

import DrawerBase from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import SubjectIcon from '@material-ui/icons/Subject'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export const Drawer = ({ menuIsOpen, toggleDrawerHandler }) => {
  const classes = useStyles()

  return (
    <DrawerBase open={menuIsOpen} onClose={toggleDrawerHandler}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawerHandler}
        onKeyDown={toggleDrawerHandler}
      >
        <List>
          <Link to="/search">
            <ListItem button key="Search Plants">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search Plants" />
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem button key="My Logs">
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary="My Logs" />
            </ListItem>
          </Link>
        </List>
      </div>
    </DrawerBase>
  )
}
