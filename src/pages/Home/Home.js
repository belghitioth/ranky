import HeadNavbar from "../../components/Navbar";
import React,{Component} from "react";

import "./Home.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class Home extends Component{

    render() {

        return (

            <div className="Home">
                <HeadNavbar/>

                <header className="App-header">
                    <h1>BuzzLink - Book an artist</h1>
                    <div className="buttons">
                    <Button className ="button" variant="info"><Link to="/artists">BOOK AN ARTIST</Link></Button>
                    <Button className ="button" variant="info"><Link to="/venues">BOOK A VENUE</Link></Button>
                    </div>
                </header>

            </div>
        );
    }
}


export default Home;
