import React from 'react'

import Component from './Component'
import {authComposer} from '/client/configs/composers'
const ComponentCtx = authComposer(Component)

export default class extends React.Component {
    render() {

        const {
            content,
            LayoutWithoutHeader,
        } = this.props

        const displayContent = () => (
            <LayoutWithoutHeader
                content={content}
            />
        )
        
        return (
            <ComponentCtx 
                {...this.props}
                displayContent={displayContent}
            />
        )
    }
}