import {composeAll, composeWithTracker} from 'react-komposer'
import App from '../components/app'

//import ReactDOM from 'react-dom'
//import { Meteor } from 'meteor/meteor'

import { Resolutions } from '../../lib/collections'
import {useDeps} from 'react-simple-di'

// class App extends React.Component {
//     addResolution(event) {
//         event.preventDefault()
//         let value = ReactDOM.findDOMNode(this.refs.resolution).value.trim()
//         ReactDOM.findDOMNode(this.refs.resolution).value = ""
//         console.log(value)
//
//         Resolutions.insert({
//             text: value,
//             complete: false,
//             createdAt: new Date()
//         })
//     }
// }


let value = ""

const onSubmitResolution = (event) => {
    event.preventDefault()

    console.log(event)
    console.log("onSubmit = " + value)

    Resolutions.insert({
        text: value,
        complete: false,
        createdAt: new Date()
    })

    value = ""
}

const onChangeInput = (event) => {
    value = event.target.value
    console.log(value + " ON Change Input")
}

const composer = (props, onData) => {
    const resolutions = Resolutions.find().fetch()
    onData( null, { resolutions})
}

const depsToPropsMapper = (context, actions) => ({
    onSubmitResolution: onSubmitResolution,
    onChangeInput: onChangeInput
});

const ComposedApp = composeAll(
    composeWithTracker( composer ),
    useDeps(depsToPropsMapper)
)(App)

export default ComposedApp