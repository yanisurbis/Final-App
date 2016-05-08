import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _authComposer = ({context, clearErrors}, onData) => {
    const {LocalState} = context();
    const error = LocalState.get('LOGIN_ERROR');
    onData(null, {error});
    // onData(null, null);

    // TODO inspecting here
    // clearErrors when unmounting the component
    return clearErrors;
};

export const _authDepsMapper = (context, actions) => ({
    submitAction: actions.account.login,
    clearErrors: actions.account.loginErrorClear,
    context: () => context
});

export default (component) => composeAll(
    composeWithTracker(_authComposer),
    useDeps(_authDepsMapper)
)(component);