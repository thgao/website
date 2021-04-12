import React, { Component } from 'react';
import Banner from '../../assets/banner2.PNG'
import ArtPage from './ArtPage';

const images = ['1.jpg', '15.jpg', '10.jpg', '2.jpg', '12.jpg', '13.jpg', '9.jpg', '14.jpg', '4.jpg',  '5.jpg', '16.jpg', '11.jpg', '6.jpg'];

const childElements = images.map(function(image){
    return (
         <div key={image}>
            <img style={{maxWidth:'100%'}} src={require("../../assets/digital/" + image)} alt={image}/>
         </div>
     );
});

const description = "illustrations, digital paintings, and graphics for student organizations"

class Digital extends Component {
    render() {
        return(
            <ArtPage 
                images={childElements}
                banner={Banner}
                title="digital art"
                description={description}
                active="digital"
            />
        )

    }
}

export default Digital;