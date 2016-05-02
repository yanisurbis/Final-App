import {composeWithTracker, composeAll} from 'react-komposer'
import ResolutionList from '../components/resolutionList'

import {useDeps} from 'react-simple-di'

const composer = ({context}, onData) => {
    const {Meteor, Collections} = context()

    if (Meteor.subscribe('resolutions.all').ready()) {
        const resolutions = Collections.Resolutions.find().fetch()
        onData( null, { resolutions})
    }
}

const depsToPropsMapper = (context, actions) => ({
    onToggleChecked: actions.resolutions.toggleChecked,
    onDeleteResolution: actions.resolutions.deleteResolution, 
    context: () => context
})

const ComposedResolutionList = composeAll(
    composeWithTracker( composer ),
    useDeps(depsToPropsMapper)
)(ResolutionList)

export default ComposedResolutionList