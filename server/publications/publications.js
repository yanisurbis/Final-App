import { Resolutions } from '../../lib/collections';
import { Meteor } from 'meteor/meteor'

Meteor.publish( 'resolutions', function() {
    return Resolutions.find();
});