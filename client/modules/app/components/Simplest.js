import React, {Component} from 'react'

export default class extends Component {
    render() {
        const {title} = this.props

        return (
            <div>
                <h3>{title
                        ? title
                        : 'Simplest React Component'}
                </h3>
            </div>
        )
    }
}