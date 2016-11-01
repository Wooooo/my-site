require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import colors from 'material-colors';
import Footer from './FooterComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div style={styles.wrapper} className="row">
                <div style={styles.container} className="container">
                    {this.props.children}

                </div>

                <Footer/>
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        display: 'flex'
    },
    wrapper: {
        backgroundColor: colors.grey[800],
        flex: 1,
        flexDirection: 'column'
    }
};

export default AppComponent;
