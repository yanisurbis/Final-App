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

}