import React, { Component } from 'react';
import { Media } from 'reactstrap';
import GithubLogo from './assets/githubIcon.png';
import LinkedinLogo from './assets/linkedinIcon.png';

const topRight = {
    position: 'absolute',
    top: '1%', 
    right: '2%',
    margin: 0,
}

const icon = {
    width: '30px',
    marginRight: '15px',
}

export default class SocialBar extends Component {
    render(){
        return(
            <div style={topRight}>
                <a href="https://github.com/thgao" target="_blank" rel="noopener noreferrer">
                    <Media object style={icon} src={GithubLogo} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/tinahgao/" target="_blank" rel="noopener noreferrer">
                    <Media object style={icon} src={LinkedinLogo} alt="linkedin"/>
                </a>
            </div>
        )
    }
}