import React, { Component } from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import SocialBar from './SocialBar';
import Menu from './Menu'
import Masonry from 'react-masonry-css'
import css from './css/grid.css'

const topLeft = {
    position: 'absolute',
    top: '70px', 
    left: '90px',
    fontSize: '900%',
    margin: 0,
}

const container = {
   
    boxShadow: '-20px 20px #FFCBAE',
    marginBottom: '20px',
    marginRight: 0,
    marginLeft: '40px',
    backgroundColour: '#991293',
    // display: 'inline-block',
    // width: '100%',
    margin: 0,
    padding: 0,
}

class ArtPage extends Component {
    render() {
        return(
            <Row style={{ width: '100%', margin: 0}}>
                <Row style={{ width: '100%'}}>
                    <Col>
                    
                        <Container style={{
                            padding: 0, 
                            margin: 0,
                            marginTop: '40px',
                            position: 'relative',
                            textAlign: 'center'
                        }}>
                            <Media style={{maxWidth: '100%'}} object src={this.props.banner} alt="Tina Gao Banner"/>
                            <h1 style={topLeft}>{this.props.title}</h1> 
                        </Container>
                        
                    </Col>
                </Row>
                <SocialBar/>
                {/* <Row style={{ width: '100%'}}> */}
                    {/* <Col style={{padding: 0, width:'100%'}}> */}
                    <div style={{width: '100%'}}>
                        <Menu active={this.props.active}/>
                    </div>
                    {/* </Col> */}
                {/* </Row> */}
                <Row style={{width: '100%',  margin: 0, padding: 0}}>
                    <Col  style={{width: '100%', padding: '5%', paddingTop: '10px'}}>
                        <div style={container}>
                        <Masonry
                            breakpointCols={3}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                            >
                            {this.props.images}
                        </Masonry>
                        </div>
                    </Col>
                    
                    
                </Row>
                <Row style={{width: '100%'}}>
                    <Col style={{width: '100%'}}><p style={{textAlign: 'center', paddingTop: '20px'}}>© Tina Gao 2020</p></Col>
                </Row>
                </Row>
        )

    }
}

export default ArtPage;