import {createApp} from 'mantra-core'
import initContext from './configs/context'

const context = initContext()

const app = createApp(context)
// TODO not to forget to change starting piece

app.init()