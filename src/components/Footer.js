import React, { Component } from 'react';
import CSS from '../css/footer.module.css';

class Home extends Component {
    render() {
        return(
            <div className={CSS.footer}>
                © Tina Gao 2021
            </div>
        )
    }
}

export default Home;