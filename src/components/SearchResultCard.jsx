import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const placeholderImageSrc = 'https://source.unsplash.com/tFRvUBh_ET8/500x500'

export const SearchResultCard = ({ plant }) => {
  console.log('PLANT', plant)
  const {
    trefleId,
    commonName,
    scientificName,
    trefleImageUrl,
    genus,
    family,
  } = plant
  const classes = useStyles()

  const handleAdd = async () => {
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trefleId,
        createdDate: Date.now(),
        commonName,
        scientificName,
        trefleImageUrl: trefleImageUrl,
        // location, note, photos will go here eventually. Need to add frontend form to add them.
      }),
    })

    const json = await response.json()
    console.log(json)

    // add error handling
  }

  // a lot of the images from trefle are broken links and not simply `null`. Is there a way to detect broken images and show placeholder instead?
  return (
    <Card className={classes.card}>
      {console.log(commonName)}
      <CardHeader
        title={commonName ? commonName : scientificName}
        subheader={commonName ? null : scientificName}
      />
      <CardMedia
        className={classes.cardMedia}
        image={trefleImageUrl ? trefleImageUrl : placeholderImageSrc}
        title={commonName}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2">Genus: {genus}</Typography>
        <Typography variant="subtitle2">Family: {family}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAdd} aria-label="add plant log">
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
