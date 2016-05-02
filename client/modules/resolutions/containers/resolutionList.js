import {composeWithTracker, composeAll} from 'react-komposer'
import ResolutionList from '../components/resolutionList'

import {useDeps} from 'react-simple-di'

const composer = ({context}, onData) => {
    const {Collections} = context()
    const resolutions = Collections.Resolutions.find().fetch()
    onData( null, { resolutions})
}

const ComposedResolutionList = composeAll(
    composeWithTracker( composer ),
    useDeps()
)(ResolutionList)

export default ComposedResolutionList