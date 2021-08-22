import React, { Component } from 'react';
import Banner from '../../assets/banner2.PNG'
import ArtPage from './ArtPage';

const images = ['19.jpg', '18.jpg', '1.jpg', '15.jpg', '2.jpg', '13.jpg', '12.jpg', '17.jpg', '14.jpg', '16.jpg', '6.jpg'];

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