import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as countAction from '../redux/action/action';
import {bindActionCreators} from 'redux';

let App = class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        const {addCount} = this.props; //action
        const {count, value} = this.props; // state
        return (
            <div>
                <button onClick = {( ) => {addCount();}}>增加按钮</button>
                <div>"this is state : "{value}</div>
            </div>
        );
    }
};

App.propTypes = {
    addCount: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        count: state.count,
        value: state.value,
    }),
    dispatch => bindActionCreators(countAction, dispatch)
)(App);


