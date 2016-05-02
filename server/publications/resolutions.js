import { Resolutions } from '../../lib/collections';
import { Meteor } from 'meteor/meteor'

export default function() {
    Meteor.publish('resolutions.all', function () {
        const selector = {}
        const options = {}

        return Resolutions.find(selector, options)
    });
}