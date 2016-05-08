import React from 'react'
import {mount} from 'react-mounter'

import {
    NotFound,
    SimpleLayout,
    Simplest,
    AuthCheck,
    LayoutWithoutHeader,
    LayoutDefault,
} from '/client/configs/components'

// import different view for handling user component
import Register from './components/AccountRegister/Wrapper'
import Login from './components/AccountLogin/Wrapper'

export default function (injectDeps, {FlowRouter}) {

    const AuthCheckCtx = injectDeps(AuthCheck)

    FlowRouter.route('/', {
        name: 'app.home',
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault,
                content: () => (<Simplest title="App main screen" />)
            })
        }
    })

    FlowRouter.notFound = {
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault, content: () => (<NotFound />)
            })
        }
    }

    FlowRouter.route('/register', {
        name: 'app.register',
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault, content: () => (<Register />),
                requireNotLoggedIn: true
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'app.login',
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault, content: () => (<Login />),
                requireNotLoggedIn: true
            });
        }
    });

    FlowRouter.route('/logout', {
        name: 'app.logout',
        action() {
            Accounts.logout();
            // Meteor.logout(() => {
            FlowRouter.go('/');
            // });
        }
    });

}