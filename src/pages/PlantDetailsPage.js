import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, value) {
  return { name, value };
}


export const PlantDetailsPage = () => {
  const classes = useStyles()
  const [details, setDetails] = useState(null)
  const [rows, setRows] = useState(null)
  const { slug } = useParams();

  useEffect(() => {
    const getDetailedPlantDataFromSlug = async (slug) => {
      try {
        const response = await fetch(`/api/plant/slug/${slug}`);
        const json = await response.json()

        setDetails(json)
      }
      catch(err) {
        console.log(err)
      }
    }

    getDetailedPlantDataFromSlug(slug)
  }, [slug])

  useEffect(() => {
    const makeRows = () => {
      if (!details) return

      setRows([
        createData('Scientific Name', details.scientific_name),
        createData('Vegetable', `${details.vegetable}`),
        createData('Edible', details.edible_part ? details.edible_part.join(", ") : `${details.edible}`),
        createData('Distribution(Native)', details.distribution?.native?.join(", ")),
        createData('Distribution(Introduced)', details.distribution?.introduced?.join(", "))
      ])
    }

    makeRows()
  }, [details])

  return (
    <main>
      { rows ?
        <div className={classes.heroContent}>
          <Container maxWidth="sm" className={classes.heroContainer}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {details.common_name}
            </Typography>
           {details.common_names && details.common_names.en ? <Typography
              variant="p"
              align="center"
              color="textSecondary"
              paragraph
            >
              Other common names: {details.common_names?.en?.join(', ')}
            </Typography>
            : null}
          </Container>
          <Container maxWidth="md">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="Plant details table">
                <TableHead>
                  <TableRow>
                    <TableCell>Attribute</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
        : null }
    </main>
  )
}
