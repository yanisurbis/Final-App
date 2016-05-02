import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    onSubmit(e) {
        e.preventDefault()
        // console.log("onSubmit " + this.state.value)

        const {onSubmitResolution} = this.props
        const node = ReactDOM.findDOMNode(this.refs.resolution)
        onSubmitResolution(node.value.trim())
        node.value = ""

    }

    render() {
        const {resolutions} = this.props

        const displayResolutions = resolutions.map((resolution) => {
            return (
                <h1>{resolution.text}</h1>
            )
        })

        return (
            <div>
                <h1>My Resolutions</h1>
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
                {displayResolutions}
            </div>
        )
    }
}
