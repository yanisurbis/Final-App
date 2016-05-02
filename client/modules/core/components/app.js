import React, {Component} from 'react'
// import ReactDOM from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        // console.log("onSubmit " + this.state.value)

        const {onSubmitResolution} = this.props
        onSubmitResolution(this.state.value)
    }

    onChangeInput(event) {
        this.setState({
            value: event.target.value.trim()
        })

        //console.log(this.state.value)
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
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        name="input"
                        onChange={this.onChangeInput}
                        value={this.state.value}
                    />
                </form>
                {displayResolutions}
            </div>
        )
    }
}
