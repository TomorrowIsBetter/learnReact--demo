import React from 'react';
import {Link} from 'react-router';

const Root = class Root extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ul>
                    <li><Link to="/app">/app</Link></li>
                    <li><Link to="/message">/message</Link></li>
                </ul>
                <span>{this.props.count}</span>
            </div>
        );
    }
};

export default Root;

