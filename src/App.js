import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import './App.css';
import dj from './img/dj.jpg'

var firebaseConfig = {
    apiKey: "AIzaSyAPThA_o-fCWAFWbTKmxAgxLwIOUrV3XDg",
    authDomain: "ranky-b627b.firebaseapp.com",
    databaseURL: "https://ranky-b627b.firebaseio.com",
    projectId: "ranky-b627b",
    storageBucket: "ranky-b627b.appspot.com",
    messagingSenderId: "102594017401",
    appId: "1:102594017401:web:a1c2eff7534c90b9"
};

firebase.initializeApp(firebaseConfig)


class App extends Component{

    constructor(  ) {
        super();
        this.state= {
            number_of_bars: 10,
            bars: [],
        };
    }

    componentDidMount() {
        let rootRef = firebase.database().ref();
        let barsRef= rootRef.child('bars');

        barsRef.on('value',snap =>{
            let bars =snap.val();
            let newState = [];
            for (let bar in bars) {
                newState.push({
                    name: bars[bar].name,
                    description: bars[bar].description,
                });
            }
            this.setState({
                bars: newState
            });
        })
    };


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1>Buzz-link - Book a Venue</h1>
                </header>
                <div className="Cards">
                    {this.state.bars.map(( bar ) => (
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
}

export default App;
