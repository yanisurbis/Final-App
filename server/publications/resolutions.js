import { Resolutions } from '../../lib/collections';
import { Meteor } from 'meteor/meteor'

export default function() {
    Meteor.publish('resolutions.all', function () {
        const selector = {}
        const options = {
            sort: {createdAt: -1}
        }

        return Resolutions.find(selector, options)
    });
}