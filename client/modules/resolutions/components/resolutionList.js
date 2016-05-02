import React, {Component} from 'react'
import Resolution from './resolution'

export default class ResolutionList extends Component {
    render() {
        const {resolutions} = this.props

        const displayResolutions = resolutions.map((resolution) => {
            return (
                <h1><Resolution resolution={resolution} /></h1>
            )
        })
        
        return (
            <div>
                {displayResolutions}
            </div>
        )
    }
}
