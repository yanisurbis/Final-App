import React, {Component} from 'react'

// TODO tests
// register form
//      i am not logged in and can register
//      i am logged in and can't register
//      what after registration?
export default class extends Component {
    exit(path = '/') {

        // TODO we have FlowRouter here?
        setTimeout(function() {
            FlowRouter.go(path)
        }, 0)
        //return displayLoading()
    }

    render() {
        const {
            displayContent,
            requireNotLoggedIn,
            // TODO we have this props because of ComponentCtx?
            userId,
            // this prop is definetly not
            requireUserId,
            // this also
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
        if (!userId && requireUserId) {
            return this.exit()
        }

        return displayContent()
    }
}