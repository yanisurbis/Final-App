import {createApp} from 'mantra-core'
import initContext from './configs/context'

import resolutions from './modules/resolutions'

const context = initContext()

const app = createApp(context)
app.loadModule(resolutions)
app.init()