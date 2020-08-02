import React, { Component } from 'react';
import { Row, Col, Media } from 'reactstrap';
import SocialBar from './SocialBar';
import Menu from './Menu'
import Masonry from 'react-masonry-css'
import CSS from './css/styles.module.css'
import './css/grid.css';

const gridContainer = {
    boxShadow: '-20px 20px #FFCBAE',
    marginBottom: '20px',
    marginRight: 0,
    marginLeft: '40px',
    backgroundColour: '#991293',
    margin: 0,
    padding: 0,
}

const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    768: 1
}

class ArtPage extends Component {
    render() {
        return(
            <Row style={{ width: '100%', margin: 0}}>
                <Row style={{ width: '100%'}}>
                    <Col>
                        <div style={{ padding: 0, margin: 0, width: '100%'}}>
                            <Media style={{maxWidth: '60%'}}  object src={this.props.banner} alt="Tina Gao Banner"/>
                            <h1 class={CSS.title}>{this.props.title}</h1> 
                        </div>
                        
                    </Col>
                </Row>
                <SocialBar/>
                <div style={{width: '100%'}}>
                    <Menu active={this.props.active}/>
                </div>
                <Row style={{width: '100%',  margin: 0, padding: 0}}>
                    <Col style={{width: '100%', padding: '5%', paddingTop: '10px'}}>
                        <div style={gridContainer}>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
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