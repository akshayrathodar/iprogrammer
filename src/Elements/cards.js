import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    Width: 450,
    maxWidth:450,
    margin:45,
  },
  texture :{
    fontWeight:'lighter',
    fontSize:'12'
  }
});

export default function CardMedias(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} id={props.myid}>
      <h3>Id : {props.myid}</h3>
      <CardActionArea>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography> */}
          <Typography component="p">
            <h4>Title :</h4>{props.title}
          </Typography>
          <Typography className={classes.texture}>
            <h4>Description :</h4>{props.desc}
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