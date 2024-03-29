import React, { Component } from 'react';
import Banner from '../../assets/banner1.PNG'
import ArtPage from './ArtPage';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', 
'8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];

const childElements = images.map(function(image){
    return (
         <div key={image}>
            <img  style={{maxWidth:'100%'}} src={require("../../assets/traditional/" + image)} alt={image}/>
         </div>
     );
});

const description = "acrylic paintings, watercolours, conte sketches, pen sketches, and models"

class Traditional extends Component {
    render() {
        return(
            <ArtPage 
                images={childElements}
                banner={Banner}
                title="traditional art"
                description={description}
                active="traditional"
            />
        )

    }
}

export default Traditional;