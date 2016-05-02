import React, {Component} from 'react'
import Resolution from './resolution'

export default class ResolutionList extends Component {
    render() {
        const {resolutions, onToggleChecked, onDeleteResolution} = this.props

        const displayResolutions = resolutions.map((resolution) => {
            return (
                <h1>
                    <Resolution
                        key={resolution._id}
                        resolution={resolution}
                        onToggleChecked={onToggleChecked}
                        onDeleteResolution={onDeleteResolution}
                    />
                </h1>
            )
        })
        
        return (
            <div>
                {displayResolutions}
            </div>
        )
    }
}
