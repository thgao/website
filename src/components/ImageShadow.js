import React, { Component } from 'react';
import CSS from '../css/image.module.css'

class ImageShadow extends Component {
    render(){
        const boxShadow = this.props.left ? CSS.boxShadowLeft: CSS.boxShadowRight;

        return(
            <div className={boxShadow}>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }

}

export default ImageShadow;