import React, {Component} from 'react'

export default class Resolution extends Component {
    toggleChecked() {
        const {onToggleChecked, resolution} = this.props
        onToggleChecked(resolution._id, resolution.complete)
    }
    
    deleteResolution() {
        const {onDeleteResolution, resolution} = this.props
        onDeleteResolution(resolution._id)
    }
    
    render() {
        const {resolution} = this.props

        return (
            <div>
                <input 
                    type="checkbox"
                    readOnly={true}
                    checked={resolution.complete}
                    onClick={this.toggleChecked.bind(this)}
                />
                {resolution.text}
                <button
                    onClick={this.deleteResolution.bind(this)}
                >
                    Delete
                </button>
            </div>
        )
    }

}

