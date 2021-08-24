import React from 'react'
import "../pages/index.css"
import Hero from "../images/illustration-hero.svg"
import Music from "../images/icon-music.svg"


function mypages() {
    return (
        <selection>
            <div className="myContainer d-flex">
                <div className="card" >
                    <img src={Hero} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">Order Summary</h5>
                        <p className="card-text">You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</p>
                        <div className="subscription d-flex ">
                            <img src={Music} alt="Music" />
                            <div>
                                <p className="substitle">Annual Plan</p>
                                <p className="subsexp">$59.99/year</p>
                            </div>
                            <a href="" className="align-self-center flex-fill text-end">Change</a>
                        </div>

                        <button className="btn" type="button">
                            Proceed to Payment
                        </button>

                        <a href="" id="cancel" className="d-flex justify-content-center">
                            Cancel Order
                        </a>

                    </div>
                </div>
            </div>
        </selection>
    )
}

export default mypages
