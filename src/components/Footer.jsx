import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Made by Linda Zhao at Juno College
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Code hosted on:
        <Link
          color="inherit"
          href="https://github.com/lindajzhao/plant-sightings"
        >
          Github
        </Link>{' '}
      </Typography>
    </footer>
  )
}
