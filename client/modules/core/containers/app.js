import {composeAll, composeWithTracker, compose} from 'react-komposer'
import App from '../components/app'

import {useDeps} from 'react-simple-di'

const composer = ({context}, onData) => {
    const {Collections} = context()
    const resolutions = Collections.Resolutions.find().fetch()
    onData( null, { resolutions})
}

const depsToPropsMapper = (context, actions) => ({
    onSubmitResolution: actions.resolutions.submitResolution,
    context: () => context
})

const ComposedApp = composeAll(
    composeWithTracker( composer ),
    useDeps(depsToPropsMapper)
)(App)

export default ComposedApp