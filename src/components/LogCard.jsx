import React, { useState } from 'react'
import clsx from 'clsx'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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

export const LogCard = ({ plant }) => {
  const { commonName, createdDate, genus, family, scientificName } = plant
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

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
        image={placeholderImageSrc}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2">
          Scientific Name: {scientificName}
        </Typography>
        <Typography variant="subtitle2">Genus: {genus}</Typography>
        <Typography variant="subtitle2">Family: {family}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Info:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
