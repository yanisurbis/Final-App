// this is the great context
// we will be injecting this context in almost everything for later usage
import * as Collections from '../../lib/collections'
import {Meteor}         from 'meteor/meteor'
import {FlowRouter}     from 'meteor/kadira:flow-router'
import {ReactiveDict}   from 'meteor/reactive-dict'
import {Tracker}        from 'meteor/tracker'
import {Accounts}       from 'meteor/accounts-base'
import _ from 'lodash'

// function that returns information about user

// TODO check userSubReady for what
// check userId for loggedIn
const authCommon = function () {
    let userSubReady = Meteor.subscribe('users.current').ready()

    const userId = Meteor.userId() || null
    const user = Meteor.user()
    const profile = _.get(Meteor.user(), 'profile', {})
    const email = _.get(Meteor.user(), 'emails[0].address', {})
    
    //console.log("HERE email is " + email)
    return {
        userSubReady,
        userId,
        user,
        email,
        profile
    }
}

export default function () {
    return {
        Meteor,
        FlowRouter,
        Collections,
        LocalState: new ReactiveDict(),
        Tracker,
        Accounts,
        authCommon
    }
}