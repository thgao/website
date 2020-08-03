import React, { Component } from 'react';
import Banner from './assets/banner2.PNG'
import ArtPage from './ArtPage';

const images = ['1.jpg', '2.jpg','10.jpg', '9.jpg', '3.jpg', '4.jpg',  '5.jpg', '6.jpg', '11.jpg', '7.jpg', '8.jpg'];

const childElements = images.map(function(image){
    return (
         <div key={image}>
            <img style={{maxWidth:'100%'}} src={require("./assets/digital/" + image)} alt={image}/>
         </div>
     );
});

class Digital extends Component {
    render() {
        return(
            <ArtPage images={childElements} banner={Banner} title="Digital Art" active='digital'/>
        )

    }
}

export default Digital;