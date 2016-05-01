import {composeWithTracker} from 'react-komposer'
import App from '../components/app'

//import ReactDOM from 'react-dom'
//import { Meteor } from 'meteor/meteor'

import { Resolutions } from '../../lib/collections'

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

const composer = (props, onData) => {
 
    const resolutions = Resolutions.find().fetch()
    onData( null, { resolutions })

}

const ComposedApp = composeWithTracker( composer )( App )

export default ComposedApp