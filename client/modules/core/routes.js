import React from 'react'

import {mount} from 'react-mounter'
import ComposedApp from './containers/app'
import MainLayout from './components/main-layout'

export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout)

    FlowRouter.route('/', {
        action() {
            // TODO #3 probably error in content, must be funciton
            mount(MainLayoutCtx, {
                content: <ComposedApp/>
            })
        }
    })
}

