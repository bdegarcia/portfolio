import React from "react";
import Ben from '../content/ben.jpg'

function Home(){
    return (
        <div className="container-fluid">
        <h2>About Me</h2>
        <br />
        <div className="row">
            <div className="col-md-3">
                <img src={Ben} alt="Ben de Garcia" className="img img-fluid mx-auto d-block" />
            </div>
            <div className="col-md-7">
                <p>You have reached the page of Ben de Garcia.</p>
                <p>Ben is a 27 year old male, currently employed in the Automotive industry, but is looking for a change of career. Here you can find pertinent information, as well as send a message to connect.</p>
            </div>
        </div>
    </div>
    )
}

export default Home