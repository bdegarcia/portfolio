import React from "react";
import Resume from '../content/resume.pdf'

function Contact(){

    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row justify-content-sm-center">
                <div className="column-lg-9">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Leave a message.</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <div id="emailHelp" className="form-text">Want me to get ahold of you? Submit your email.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="column-lg-2 offset-sm-1 col-auto">
                    <h2 className="display-5">Want to get in touch?</h2>
                    <a className="btn btn-secondary btn-sm" href="https://www.linkedin.com/in/ben-de-garcia-56a545130/">LinkedIn</a>
                    <a className="btn btn-primary btn-sm" href="https://www.facebook.com/dont.be.stoopid/">FaceBook</a>
                    <a className="btn btn-danger btn-sm" href="mailto:degarcia.ben@gmail.com">Send me an Email!</a>
                    <a className="btn btn-warning btn-sm" href={Resume} target="_blank">View Resume</a>
                    <a className="btn btn-sm btn-info" href="https://github.com/bdegarcia">GitHub</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact