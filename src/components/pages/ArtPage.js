import React, { Component } from 'react';
import Menu from '../Menu'
import Footer from '../Footer'
import Masonry from 'react-masonry-css'
import CSS from '../../css/artpage.module.css'
import '../../css/grid.css';

const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    768: 1
}

class ArtPage extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 0}}>
                <Menu active={this.props.active}/>
                <div className={CSS.artPageText}>
                    <h2>{this.props.title}</h2> 
                    <h3>{this.props.description}</h3>
                </div>
                <div>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {this.props.images}
                    </Masonry>
                </div>
                <Footer/>
            </div>
        )

    }
}

export default ArtPage;