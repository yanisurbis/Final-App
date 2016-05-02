import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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
        console.log("onSubmit " + e)
    }

    onChangeInput(e) {
        console.log("onChangeInput")
    }

    render() {
        const {resolutions} = this.props
        console.log(resolutions)

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
                >
                    <input
                        type="text"
                        name="input"
                    />
                </form>
                {displayResolutions}
            </div>
        )
    }
}
