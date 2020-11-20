import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { fade, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(8, 0, 6),
  },
  heroSearch: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 2 ,2, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    fontSize: 26,
  },
}))

export const SearchPage = () => {
  const location = useLocation()
  const classes = useStyles()
  const [query, setQuery] = useState('pineapple')

  console.log('loc', location)
  useEffect(() => {
    const getTrefleByQuery = async (query) => {
      console.log('get', query)
      try{
        const results = await fetch(`http://localhost:3000/api/plants?q=${query}`)
        const data = await results.json()

        console.log(data)
    }
      catch(err) {
        console.log(err)
      }
    }
    console.log('eff')
    getTrefleByQuery(query)
  }, [query])

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Add Plants
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph
        >
          Plants from Trefle.
        </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item className={classes.heroSearch}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
          </Grid>
      </Container>
    </div>
  )
}
