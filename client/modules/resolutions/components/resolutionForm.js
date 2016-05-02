import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class ResolutionForm extends Component {
    onSubmit(e) {
        e.preventDefault()

        const {onSubmitResolution} = this.props
        const node = ReactDOM.findDOMNode(this.refs.resolution)
        onSubmitResolution(node.value.trim())
        node.value = ""

    }

    render() {
        return (
            <form
                className="new-resolution"
                onSubmit={this.onSubmit.bind(this)}
            >
                <input
                    type="text"
                    name="input"
                    ref="resolution"
                />
            </form>
        )
    }
}
