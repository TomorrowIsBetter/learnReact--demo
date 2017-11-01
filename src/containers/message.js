import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as countAction from '../redux/action/action';
import {bindActionCreators} from 'redux';

let Message = class Message extends React.Component {
    constructor () {
        super();
    }

    render() {
        const { decCount } = this.props; 
        const { value} = this.props; // state
        return (
            <div>
                <button onClick = {() => decCount()}>减少按钮</button>
                <div>' this is state : ' {value}</div>
            </div>
        );
    }
};

Message.propTypes = {
    decCount: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        value: state.value,
    }),
    dispatch => bindActionCreators(countAction, dispatch)
)(Message);