import {Resolutions} from '../../lib/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export default function() {
    Meteor.methods({
        'resolution.create'(text) {
            check(text, String)

            Resolutions.insert({
                text: text,
                complete: false,
                createdAt: new Date()
            })
        }
    })
}