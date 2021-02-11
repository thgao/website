import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../assets/me.jpg';
import ImageShadow from '../ImageShadow';
import SocialBar from '../SocialBar';
import Footer from '../Footer';
import CSS from '../../css/styles.module.css';

class Home extends Component {
    render() {
        return(
            <div className={CSS.homeContainer}>
                <div className={CSS.homeBanner}>
                    <div>
                        <Row noGutters className={CSS.homeBannerImageAbout}>
                            <div className={CSS.topSocialBar}>
                                <SocialBar/>
                            </div>
                            <Col md="5">
                                <div className={CSS.homeImage}>
                                    <ImageShadow src={ProfilePicture} alt="Tina Gao" left/>
                                </div>
                            </Col>
                            <Col md="7">
                                <h1 className={CSS.myName}>Tina Gao</h1>
                                <div className={CSS.aboutMe} >
                                    <h3>about me</h3>
                                    <h4>I'm a software engineer with an interest in product design. I'm passionate about working on products that shape how users interact with and think about the tools that they already have. </h4>
                                    <h4>In my free time, I love working on art and design projects. Click on a category to view some of my paintings, digital drawings, photography, and more!</h4>
                                </div>
                                <div className={CSS.bodySocialBar}>
                                    <SocialBar/>
                                </div>
                            </Col>
                        </Row>
                        <Row noGutters className={CSS.homeBannerMenu}>
                            <Link to="/traditional">
                                <h2>traditional art</h2>
                            </Link>
                            <h2 className={CSS.homeBannerMenuDivider}>•</h2>
                            <Link to="/digital">
                                <h2>digital art</h2>
                            </Link>
                            <h2 className={CSS.homeBannerMenuDivider}>•</h2>
                            <Link to="/photography">
                                <h2>photography</h2>
                            </Link>
                        </Row>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;