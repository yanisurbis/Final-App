import {composeAll} from 'react-komposer'
import ResolutionForm from '../components/resolutionForm'
import {useDeps} from 'react-simple-di'

const depsToPropsMapper = (context, actions) => ({
    onSubmitResolution: actions.resolutions.submitResolution,
    context: () => context
})

const ComposedResolutionForm = composeAll(
    useDeps(depsToPropsMapper)
)(ResolutionForm)

export default ComposedResolutionForm