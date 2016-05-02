import React from 'react'

import {mount} from 'react-mounter'
import MainLayout from './components/main-layout'
import Resolutions from './components/resolutions'

export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout)

    FlowRouter.route('/', {
        action() {
            // TODO #3 probably error in content, must be funciton
            mount(MainLayoutCtx, {
                content: () => (<Resolutions/>)
            })
        }
    })
}

