import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
import dj from './img/dj.jpg'


const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);

function App() {
    const classes = useStyles();
    const bars = [
        { id: 1, name: 'Badaboom' , description: ' The best bar of Paris !'},
        { id: 2, name: 'Le 43 Cocktail Bar' , description: ' The best bar of Paris !'},
        { id: 3, name: 'The Financier', description: ' The best bar of Paris !' },
        { id: 4, name: 'Wanderlust', description: ' The best bar of Paris !' },
        { id: 5, name: 'Le Perchoir', description: ' The best bar of Paris !' },
    ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ranky - Book a Venue</h1>
      </header>
      <div className="Cards"  >
          {bars.map((bar) => (
          <Card className="card">
          <CardActionArea>
            <CardMedia
              className="media"
              image={dj}
              title={bar.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {bar.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {bar.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Book
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
          ))}
      </div>
    </div>
  );
}

export default App;
