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

import placeholderImageSrc from '../assets/image-placeholder.png'

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

export const SearchResultCard = ({ plant }) => {
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
    try {
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
          family,
          genus,
          photos: trefleImageUrl,
          // eventually adding a front-end component to add notes, photos
        }),
      })

      if (response.status !== 200) {
        // add error handling
        console.log('Oops, something went wrong!')
      }
    } catch (e) {
      // add error handling
      console.log('Oops, something went wrong!')
    }
  }

  // a lot of the images from trefle are broken links and not simply `null`. Need a way to handle it
  return (
    <Card className={classes.card}>
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
