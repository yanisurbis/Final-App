export default {
    submitResolution({Meteor}, textFromInput) {
        Meteor.call('resolution.create', textFromInput)
    },
    toggleChecked({Meteor}, id, status) {
        Meteor.call('resolution.toggle', id, status)
    }
}