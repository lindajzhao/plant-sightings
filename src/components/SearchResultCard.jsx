import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import AddIcon from '@material-ui/icons/Add'
import InfoIcon from '@material-ui/icons/Info'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
    slug,
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
          slug,
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
        <Button
          onClick={handleAdd}
          aria-label="add plant log"
          color="default"
          startIcon={<AddIcon />}
        >
          Add
        </Button>
        <Button
          variant="link"
          color="default"
          startIcon={<InfoIcon />}
          href={`pl/${slug}`}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  )
}
