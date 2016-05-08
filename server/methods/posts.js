import {Resolutions} from '../../lib/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export default function() {
    Meteor.methods({
        'post.create'(theme, text) {
            check(text, String)

            Resolutions.insert({
                text: text,
                theme: theme,
                createdAt: new Date()
            })
        },
    })

    Meteor.methods({
        'post.delete'(id) {
            check(id, String)

            Resolutions.remove(id)
        }
    })
}