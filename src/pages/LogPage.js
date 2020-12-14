import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { LogCard } from '../components'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export const LogPage = () => {
  const classes = useStyles()
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const getUserLogs = async () => {
      try {
        const response = await fetch('/api/logs');
        const json = await response.json()
        console.log(json)
        setLogs(json.data)
      }
      catch(err) {
        console.log(err)
      }
    }

    getUserLogs()
  }, [setLogs])

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm" className={classes.heroContainer}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Plant Sightings
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            A logbook for plants found in the wild!
          </Typography>
          <Link to="/search">
            <Button variant="contained" size="large" color="primary">	
              Add some plants!
            </Button>
          </Link>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {logs.map((plant, i) => (
            <Grid item key={`${plant.trefleId}-${i}`} xs={12} sm={6} md={4}>
              <LogCard plant={plant}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}
