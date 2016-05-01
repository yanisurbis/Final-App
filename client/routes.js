import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import ComposedApp from './containers/app'
import MainLayout from './components/main-layout'

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: <ComposedApp text="Sample text"/>
        })
    }
})
