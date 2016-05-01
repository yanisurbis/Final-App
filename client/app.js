import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

class App extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}


Meteor.startup( () => {
        ReactDOM.render(<App/>, document.getElementById("render-target"))
})

