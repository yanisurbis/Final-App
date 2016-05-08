import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //console.log(this.props.data.text)
        const {data} = this.props
        const {theme, text} = data
        return (
            <div className="row">
                <div>
                    THEME: {theme}
                </div>
                <div>
                    TEXT: {text}
                </div>
            </div>
        )
    }
}