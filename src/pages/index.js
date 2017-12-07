import React, { Component } from 'react';
import { browserHistory, history } from 'react-router';
import Link, { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// local components
import StylingOverrides from '../components/StylingOverrides';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Title</title>
                </Helmet>
                <StylingOverrides>
                    <section
                        className="uk-section uk-section-primary uk-preserve-color uk-cover-container"
                        data-uk-height-viewport="offset-bottom: 0">
                        <div className="uk-container uk-container-small">
                            <div className="uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium uk-margin-bottom">
                                Click <Link to="/styleguide">here</Link> to visit the Styleguide
                            </div>
                        </div>
                    </section>
                </StylingOverrides>
            </div>
        );
    }
}

export default Home;
