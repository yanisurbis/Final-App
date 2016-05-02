import React, {Component} from 'react'

export default class Resolution extends Component {
    toggleChecked() {
        const {onToggleChecked, resolution} = this.props
        onToggleChecked(resolution._id, resolution.complete)
    }
    
    render() {
        const {resolution} = this.props

        return (
            <div>
                <input type="checkbox"
                       readOnly={true}
                       checked={resolution.complete}
                       onClick={this.toggleChecked.bind(this)}
                />
                {resolution.text}
            </div>
        )
    }

}

