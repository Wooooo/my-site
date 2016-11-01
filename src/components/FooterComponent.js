'use strict';

import React from 'react';
import Consts from '../consts';

require('styles//Footer.css');

class FooterComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={styles.footer}>
                    바닥
                </div>
            </div>
        );
    }
}

const styles = {
    footer: {
        color: Consts.PRIMARY_COLOR
    }
}
export default FooterComponent;
