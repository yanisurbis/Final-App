import {createApp} from 'mantra-core'
import initContext from './configs/context'

import appModule from './modules/app'
import postsModule from './modules/posts'
const context = initContext()

const app = createApp(context)
// TODO not to forget to change starting piece
app.loadModule(appModule)
app.loadModule(postsModule)

app.init()