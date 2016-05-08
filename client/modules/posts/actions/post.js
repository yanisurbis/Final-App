export default {

    create({Meteor, LocalState, FlowRouter, Accounts}, theme, text) {

        Meteor.call('post.create', theme, text, (err) => {
            if (err && err.reason) {
                return LocalState.set('SAVING_ERROR', err.message);
            }

        });
        FlowRouter.go('/posts');
    },

};