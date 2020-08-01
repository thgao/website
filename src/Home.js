import React, { Component } from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProfilePicture from './assets/me.jpg';
import TraditionalPreview from './assets/traditional/5.jpg';
import DigitalPreview from './assets/digital/2.jpg';
import PhotographyPreview from './assets/photography/5.jpg';
import Banner from './assets/banner.PNG'
import ImageShadow from './ImageShadow';
import SocialBar from './SocialBar';

const topLeft = {
    position: 'absolute',
    bottom: '70px', 
    left: '90px',
    fontSize: '900%',
    margin: 0,
}

class Home extends Component {
    render() {
        return(
            <Row style={{ width: '100%', margin: 0, padding: 0}}>
                <Row style={{ width: '100%'}}>
                    <Col lg="12">
                        <Container style={{
                            padding: 0, 
                            margin: 0,
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            <Media style={{maxWidth: '100%'}} object src={Banner} alt="Tina Gao Banner"/>
                            <h1 style={topLeft}>Tina Gao</h1> 
                        </Container>
                        <SocialBar/>
                    </Col>
                </Row>
                <Row style={{width: '100%', height:'auto'}}>
                    <Col lg="3">
                        <Container style={{paddingLeft: '40px', paddingRight: 0}}>
                            <ImageShadow src={ProfilePicture} alt="Tina Gao" left maxWidth/>
                            <h2 style={{fontSize: '300%', fontWeight: '550', paddingTop: '20px', margin: 0}}>About Me</h2>
                            <h5>I'm a software engineering student with a passion for art. Here you can find a sample of some of my art including paintings, digital drawings, photography, and more!</h5> 
                            <h5>Click on an image to view more of my work or checkout my Github and Linkedin.</h5>
                       
                        </Container>
                    </Col>
                    <Col lg="9" style={{width: '100%'}}> 
                    <Row style={{paddingRight: '50px'}}>
                        <Col lg="7">
                            <Container >
                                <Link to="/traditional">
                                    <ImageShadow src={TraditionalPreview} alt="Traditional Art" button/>
                                </Link>
                            </Container>
                        </Col>
                        <Col lg="5">
                            <Row>
  
                                <Link to="/digital">
                                    <ImageShadow src={DigitalPreview} alt="Digital Art" button half/>
                                </Link>
                   
                            </Row>
                            <Row>
                                <Link to="/photography">
                                    <ImageShadow src={PhotographyPreview} alt="Photography" button half/>
                                </Link>
                            </Row>
                            
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{width: '100%', position: 'absolute', bottom: 0}}>
                    <Col style={{width: '100%'}}><p style={{textAlign: 'center'}}>© Tina Gao 2020</p></Col>
                </Row>
                </Row>
        )

    }
}

export default Home;