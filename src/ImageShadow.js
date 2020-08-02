import React, { Component } from 'react';
import CSS from './css/styles.module.css'

class ImageShadow extends Component {
    render(){
        const boxShadow = this.props.left ? CSS.boxShadowLeft: CSS.boxShadowRight;
        const hover = this.props.button ? CSS.container : null;
        let imageCss = this.props.half? CSS.menuImageHalf : CSS.menuImage;
        if(this.props.maxWidth) {
            imageCss = CSS.menuImageDefault
        }

        return(
            <div className={hover}>
                <div className={boxShadow}>
                    <div className={CSS.fill}>
                        <img class={imageCss} object src={this.props.src} alt={this.props.alt} />
                    </div>
                </div>
                <div className={CSS.overlay}>
                    <div className={CSS.overlayText}>{this.props.alt}</div>
                </div>
            </div>
        )
    }

}

export default ImageShadow;