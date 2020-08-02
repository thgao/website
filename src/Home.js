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
import CSS from './css/styles.module.css';

class Home extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col lg="12">
                        <Container style={{
                            padding: 0, 
                            margin: 0,
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            <Media style={{maxWidth: '100%'}} object src={Banner} alt="Tina Gao Banner"/>
                            <h1 class={CSS.title}>Tina Gao</h1> 
                        </Container>
                        <SocialBar/>
                    </Col>
                </Row>
                <Row style={{width: '100%', height:'auto'}}>
                    <Col md="12" lg="3">
                        <Row>
                    <Col md="5" lg="12">
                        <div style={{ margin: 0}}>
                            <ImageShadow src={ProfilePicture} alt="Tina Gao" left maxWidth/>
                        </div>
                        </Col>
                    <Col md="7" lg="12">
                        <div style={{ marginLeft: '40px', marginBottom: '30px'}}>
                            <h2 style={{fontSize: '300%', fontWeight: '550', paddingTop: '20px', margin: 0}}>About Me</h2>
                            <h5>I'm a software engineering student with a passion for art. Here you can find a sample of some of my art including paintings, digital drawings, photography, and more!</h5> 
                            <h5>Click on an image to view more of my work or checkout my Github and Linkedin.</h5>
                        </div>
                    </Col>
                    </Row>
                    </Col>
                    
                    <Col lg="9"> 
                    <Row>
                        <Col lg="7">
                            <Row>
                                <h2 class={CSS.itemTitle}>Traditional Art</h2>
                                <Link to="/traditional">
                                    <ImageShadow src={TraditionalPreview} alt="Traditional Art" button/>
                                </Link>
                            </Row>
                        </Col>
                        <Col lg="5">
                            <Row>
                                <h2 class={CSS.itemTitle}>Digital Art</h2>
                                <Link to="/digital">
                                    <ImageShadow src={DigitalPreview} alt="Digital Art" button half/>
                                </Link>
                            </Row>
                            <Row>
                                <h2 class={CSS.itemTitle}>Photography</h2>
                                <Link to="/photography">
                                    <ImageShadow src={PhotographyPreview} alt="Photography" button half/>
                                </Link>
                            </Row>
                            
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{width: '100%'}}>
                    <Col style={{width: '100%'}}><p style={{textAlign: 'center'}}>© Tina Gao 2020</p></Col>
                </Row>
            </div>
        )
    }
}

export default Home;