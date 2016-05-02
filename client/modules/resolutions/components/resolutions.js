import React from 'react'
import ComposedResolutionForm from '../containers/resolutionForm'
import ComposedResolutionList from '../containers/resolutionList'

const Resolutions = () => {
    return (
        <div>
            <h1>Resolutions</h1>
            <ComposedResolutionForm />
            <ComposedResolutionList />
        </div>
    )
}

export default Resolutions