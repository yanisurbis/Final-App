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

}