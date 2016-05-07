import React, {Component} from 'react'

export default class extends Component {
    exit(path = '/') {

        // TODO we have FlowRouter here?
        setTimeout(function() {
            FlowRouter.go(path)
        }, 0)
    }

    render() {
        const {
            displayContent,

            // TODO we have this props because of ComponentCtx?
            userId,
            // this prop is definetly not
            requireUserId,
            // this also
            requireNotLoggedIn,
            // both we pass in routes

        } = this.props;

        // const {
        //     waitingForAuthData,
        // } = this.props;
        //
        // if (waitingForAuthData) {
        //     return displayLoading();
        // } else {
        //
        //     if (userId && requireNotLoggedIn) {
        //         return this.exit();
        //     }
        //
        //     if (!userId && requireUserId) {
        //         return this.exit();
        //     }
        //
        //     return displayContent();
        // }
        return displayContent()
    }
}