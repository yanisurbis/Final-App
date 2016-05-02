export default {
    submitResolution({Meteor}, textFromInput) {
        Meteor.call('resolution.create', textFromInput)
    }
}