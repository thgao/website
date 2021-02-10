import React, { Component } from 'react';
import { Media } from 'reactstrap';
import GithubLogo from '../assets/githubIcon.png';
import LinkedinLogo from '../assets/linkedinIcon.png';
import CSS from '../css/socialbar.module.css'


export default class SocialBar extends Component {
    render(){
        return(
            <div className={CSS.topRight}>
                <a href="https://github.com/thgao" target="_blank" rel="noopener noreferrer">
                    <Media object className={CSS.icon} src={GithubLogo} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/tinahgao/" target="_blank" rel="noopener noreferrer">
                    <Media object className={CSS.icon} src={LinkedinLogo} alt="linkedin"/>
                </a>
            </div>
        )
    }
}