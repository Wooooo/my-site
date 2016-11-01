'use strict';

require('../styles/Home.scss');

import React from 'react';
import {Link} from 'react-router';
import Consts from '../consts';
import FontAwesome from 'react-fontawesome';
import MaterialColors from 'material-colors';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovers: null,
            isTrans: false
        };
    }

    _changeHover = (index, value) => {
        //let _hovers = this.state.hovers.slice();
        //
        //_hovers[index] = value;

        this.setState({
            hovers: value === 0 ? null : index,
            isTrans: true
        });


    }

    _handleMouseOver = (index) => {
        this._changeHover(index, 1);
    }

    _handleMouseOut = (index) => {
        this._changeHover(index, 0);
    }

    render() {
        const {hovers} = this.state;

        const titleName = [
            'Profile',
            'Project'
        ];

        const onMouse = (idx) => {
            return {
                onMouseOver:this._handleMouseOver.bind(null, idx),
                onMouseOut:this._handleMouseOut.bind(null, idx)
            };
        };

        let subTitle = null;

        if( hovers !== null ) {
            subTitle = (
                <div key={hovers}>
                    {titleName[hovers]}
                </div>
            );
        }

        return (
            <div style={styles.container}>
                <div style={{flex: 1}} className="row">
                    <div style={styles.wrapper}>
                        <div style={styles.content}>
                            <div>
                                <Link {...onMouse(0)} to="/profile" style={styles.link}>
                                    프로필
                                </Link>
                            </div>
                            <div>
                                <Link {...onMouse(1)} to="/projects" style={styles.link}>
                                    프로젝트
                                </Link>
                            </div>
                        </div>

                        <div style={styles.subTitle}>
                            <ReactCSSTransitionGroup
                                transitionName="subtitle"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={50}>
                                {subTitle}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: 100,
        flex: 1,
        display: 'flex'
    },
    wrapper: {
        flexDirection: 'column',
        flex: 1,
        display: 'flex'
    },
    content: {
        color: 'white',
        fontSize: 80,
        fontFamily: 'Nanum Gothic',
        flex: 1
    },
    link: {
        color: Consts.PRIMARY_COLOR,
        textDecoration: 'none'
    },
    subTitle: {
        fontSize: 50,
        fontStyle: 'italic',
        color: MaterialColors.yellow[100]
    }
};

export default HomeComponent;
