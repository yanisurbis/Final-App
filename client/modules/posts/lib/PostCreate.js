import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _registerComposer = ({context, clearErrors}, onData) => {
    // TODO saving error cases
    const {LocalState} = context();
    const error = LocalState.get('REGISTER_ERROR');
    onData(null, {error});

    // clearErrors when unmounting the component
    return clearErrors;
};

export const _registerDepsMapper = (context, actions) => ({
    create: actions.post.create,
    context: () => context
});

export default (component) => composeAll(
    composeWithTracker(_registerComposer),
    useDeps(_registerDepsMapper)
)(component);