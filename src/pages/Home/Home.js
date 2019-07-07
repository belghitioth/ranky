import HeadNavbar from "../../components/Navbar";
import React,{Component} from "react";

import "./Home.css";
import Button from "react-bootstrap/Button";

class Home extends Component{

    render() {

        return (

            <div className="Home">
                <HeadNavbar/>

                <header className="App-header">
                    <h1>BuzzLink - Book an artist</h1>
                    <div className="buttons">
                    <Button className ="button" variant="info">BOOK AN ARTIST</Button>
                    <Button className ="button" variant="info">BOOK A VENUE</Button>
                    </div>
                </header>

            </div>
        );
    }
}


export default Home;
