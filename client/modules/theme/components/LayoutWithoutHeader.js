import React from 'react'

export default class extends React.Component {
    render() {
        
        const {
            content
        } = this.props

        // TODO add navigation

        return (
            <div>
                <div className="container">
                    {content()}
                </div>
            </div>
        )
    }
}