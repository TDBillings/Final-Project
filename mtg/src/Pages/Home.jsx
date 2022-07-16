// import { json } from "express";
import React from "react";
import Welcome from "../Welcome-Magic.jpg"
import Chandra from "../Chandra-Find.jpg"
import Arena from "../Arena-Playnow.jpg"
import { Carousel } from "react-bootstrap";



function Home() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {

    fetch("/users")
    .then((res => res.json()))
    .then((data) => setData(data))
    .then((res) => console.log(data))
    .catch((error) => console.log(error.message));
    
  },[])


    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>

          <Carousel>
          <Carousel.Item className="carousel-item active">
            <img src= {Welcome} className="d-block w-100" alt="Mana types and Welcome"/>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src= {Chandra} className="d-block w-100" alt="Chandra Looking for Cards"/>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src= {Arena} className="d-block w-100" alt="Magic Arena Scene Play Now"/>
          </Carousel.Item>
      </Carousel> 

        </main>
        {/* <nav>
          <Link to="/about">About</Link>
        </nav> */}
        {JSON.stringify(data)}
      </>
    );
  }
  export default Home