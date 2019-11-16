import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const networkPhoto = require('./pics/network-photo-1.jpg');
const excellencePhoto = require('./pics/test-photo-1.jpg');
const tutoringPhoto = require('./pics/tutoring-photo-1.jpg');



class About extends Component {
    render() {
        return(
            <div>
                <h1>Tutor Hub</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="l-block w-100"
                        src={excellencePhoto}
                        alt="We strive in exellence"
                        />
                        <Carousel.Caption>
                        <h3>World Class tutors</h3>
                        <p>Our Tutors are committed to helping you succeed.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="l-block w-100"
                        src={networkPhoto}
                        alt="A massive network"
                        />

                        <Carousel.Caption>
                        <h3>We have tutors from all over the country</h3>
                        <p>We recruit tutors from all over the country, to help you be at your best wherever you are.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="l-block w-100"
                        src={tutoringPhoto}
                        alt="Guaranteed Success"
                        />

                        <Carousel.Caption>
                        <h3>Tutee Results</h3>
                        <p>Our tutees report high success rates in tough courses like the IB program.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default About;