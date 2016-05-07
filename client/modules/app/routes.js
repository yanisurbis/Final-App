import React from 'react'
import {mount} from 'react-mounter'

import {
    SimpleLayout,
    Simplest,
    AuthCheck,
    LayoutWithoutHeader,
} from '/client/configs/components'

export default function (injectDeps, {FlowRouter}) {

    const AuthCheckCtx = injectDeps(AuthCheck)

    FlowRouter.route('/', {
        name: 'app.home',
        action() {
            mount(AuthCheckCtx, {
                LayoutWithoutHeader,
                content: () => (<Simplest title="App main screen" />)
            })
        }
    })
}