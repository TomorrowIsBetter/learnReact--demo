import Root from '../containers/topRoot';

export default {
    childRoutes: [{
        path: '/',
        component: Root,
        childRoutes: [{
            path: '/app',
            getComponent (location, cb) {
                require.ensure([], require=> {
                    cb(null, require('../containers/app').default);
                });
            },
        }, {
            path: '/message',
            getComponent (location, cb) {
                require.ensure([], require => {
                    cb(null, require('../containers/message').default);
                });
            },
        },
        ],
    }],
};