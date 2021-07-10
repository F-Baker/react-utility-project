import React, {Component} from 'react';
import {withRouter} from 'react-router';

import "./home.css";
import About from "./about/About";
import Contact from "./contact/Contact";

class Home extends Component {
    
    render = () => {
        return (
            <div className="root-home">
                <About/>
                <Contact/>
            </div>
        );
    };
}

export default withRouter(Home);
