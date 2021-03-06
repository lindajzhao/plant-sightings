import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { fade, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Link from '@material-ui/core/Link'

import { SearchResultCard } from '../components'

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroSearch: {
    marginTop: theme.spacing(4),
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: '500px',
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
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(2, 2 ,2, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    fontSize: 26,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export const SearchPage = () => {
  const classes = useStyles()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (evt) => {
    evt.preventDefault()
    
    try{
      const results = await fetch(`/api/plants?q=${query}`)
      const data = await results.json()

      setResults(data)
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
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
            Search the  <Link><a href="https://trefle.io/">Trefle API</a></Link>, an open botanical database.
            </Typography>
            <Grid container spacing={2} justify="center">
              <form>
                <Grid item className={classes.heroSearch}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Common or scientific name"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search Trefle database' }}
                      onChange={(evt) => {setQuery(evt.target.value)}}
                      onSubmit={(evt) => {handleSearch(evt.target.value)}}
                      value={query}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Grid>
              </form>
            </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          { results.length ?  (
            <Grid container spacing={4}>{
              results.map((result, i) => (
                <Grid item key={`${result.trefleId}-${i}`} xs={12} sm={6} md={4}>
                  <SearchResultCard plant={result} />
                </Grid>
              ))}
            </Grid>
          ): null}
      </Container>
      </div>

    </>
  )
}
