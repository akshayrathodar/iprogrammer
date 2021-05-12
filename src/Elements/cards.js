import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    Width: 450,
    maxWidth:450,
    margin:45,
  },
});

export default function CardMedias(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} id={props.myid}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.btnEvent(props.myid)} >
          {props.status === 'c' ? 'Compare' : 'Remove'}
        </Button>
      </CardActions>
    </Card>
  );
}