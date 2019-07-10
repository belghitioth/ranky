import React,{Component} from "react";
import HeadNavbar from "../../components/Navbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import dj from "../../img/dj.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import * as firebase from 'firebase/app';
import 'firebase/database';

import "./Artists.css";

class Artists extends Component {

    constructor(  ) {
        super();
        this.state= {
            number_of_artists: 10,
            artists: [],
        };
    }

    componentDidMount() {
        let rootRef = firebase.database().ref();
        let artistsRef= rootRef.child('artists');

        artistsRef.on('value',snap =>{
            let artists =snap.val();
            let newState = [];
            for (let artist in artists) {
                newState.push({
                    name: artists[artist].name,
                    description: artists[artist].description,
                    price: artists[artist].price,
                    image: artists[artist].image,
                });
            }
            this.setState({
                artists: newState
            });
        })
    };

    render() {

        return (
            <div className="Venues">
                <HeadNavbar></HeadNavbar>
                <div className="Cards">
                    {this.state.artists.map(( artist ) => (
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={artist.image}
                                    title={artist.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {artist.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {artist.genre}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {artist.price} /hour
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

export default Artists;
