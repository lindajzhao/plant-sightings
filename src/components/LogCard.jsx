import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

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

export const LogCard = ({ plant }) => {
  const {
    commonName,
    createdDate,
    genus,
    family,
    scientificName,
    photos,
    slug,
  } = plant
  const classes = useStyles()

  const date = new Date(parseInt(createdDate))
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        title={commonName ? commonName : scientificName}
        subheader={date.toLocaleDateString(undefined, dateOptions)}
      />
      <CardMedia
        className={classes.cardMedia}
        image={photos || placeholderImageSrc}
        title={commonName ? commonName : scientificName}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2">
          Scientific Name: {scientificName}
        </Typography>
        <Typography variant="subtitle2">Genus: {genus}</Typography>
        <Typography variant="subtitle2">Family: {family}</Typography>
      </CardContent>
      <CardActions>
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
