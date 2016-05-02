export default {
    submitResolution({Collections}, inputText) {
        Collections.Resolutions.insert({
            text: inputText,
            complete: false,
            createdAt: new Date()
        })
    }
}