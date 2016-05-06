import {useDeps, composeWithTracker, composeAll} from 'mantra-core'

export const _navHeaderComposer = ({context}, onData) => {
    const {LocalState, authCommon} = context()

    const {
        userSubReady,
        userId,
        user,
        email,
        profile
    } = authCommon()

    const LoadDummyData = LocalState.get('Developer.LoadDummyData')

    if (LoadDummyData) {
        onData(null, {
            // TODO what here?
        })
    } else {
        onData(null, {
            userSubReady,
            userId,
            user,
            email,
            profile
        })
    }
}

export const _depsMapper = (context) => ({
    context: () => context
})

// function to stuff Navigation Header with user data
// but if data is loading what?
export default (component) => composeAll(
    composeWithTracker(_navHeaderComposer),
    useDeps(_depsMapper)
)(component)