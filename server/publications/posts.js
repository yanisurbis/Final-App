import { Posts } from '../../lib/collections';
import { Meteor } from 'meteor/meteor'

export default function() {
    Meteor.publish('posts.all', function () {
        const selector = {}
        const options = {}

        return Posts.find(selector, options)
    });
}