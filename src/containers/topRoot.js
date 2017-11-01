import React from 'react';
import PropTypes from 'prop-types';
import Root from '../components/Root';
import {connect} from 'react-redux';

let topRoot = class topRoot extends React.Component {
    constructor () {
        super();
    } 

    render () {
        const { children, count} = this.props;
        return (
            <div>
                <Root count = {count} />
                {children}
            </div>
        );
    }  
};

topRoot.propTypes = {
    children : PropTypes.node.isRequired,
    count: PropTypes.number.isRequired,
};

export default connect(state => ({
    count:state.count,
}),{})(topRoot);

