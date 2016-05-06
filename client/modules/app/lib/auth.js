import {useDeps, composeWithTracker, composeAll} from 'mantra-core'


// TODO for what exporting this funciton?
export const _authComposer = ({context}, onData) => {
    const {LocalState, authCommon} = context()

    // pull out user data
    const {
        userSubReady,
        userId,
        user,
        profile
    } = authCommon()

    // TODO maybe send waitingForAuthData anyway? How to use it properly?
    if (userSubReady) {
        const data = {
            userId,
            user,
            profile
        }

        onData(null, data)
    } else {
        const waitingForAuthData = true
        const data = {
            waitingForAuthData
        }

        onData(null, data)
    }
}

// TODO for what exporting this function?
// TODO actions probably?
export const _authDepsMapper = (context) => ({
    context: () => context
})

// function to stuff component with user data
export default (component) => composeAll(
    composeWithTracker(_authComposer),
    useDeps(_authDepsMapper)
)(component)

