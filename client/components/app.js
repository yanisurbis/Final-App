import React from 'react'

const App = ({resolutions}) => {

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
            >
                <input
                    type="text"
                    placeholder="Finish this!"
                />
            </form>
            {listOfResolutions}
        </div>
    )
}

export default App