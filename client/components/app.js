import React from 'react'

const App = ({resolutions, text, onSubmitResolution, onChangeInput, value}) => {

    const listOfResolutions = resolutions.map((resolution) => {
        return (
            <h1>{resolution.text}</h1>
        )
    })

    return (
        <div>
            <h1>My Resolutions</h1>
            <form
                className="new-resolution"
                onSubmit={onSubmitResolution}
            >
                <input
                    type="text"
                    onChange={onChangeInput}
                    value={value}
                    name="input"
                />
            </form>
            {listOfResolutions}
        </div>
    )
}

export default App