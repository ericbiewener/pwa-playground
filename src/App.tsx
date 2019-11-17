import * as React from 'react'
import { hot } from 'react-hot-loader/root'

const BaseApp = () => <div>App!</div>

export const App = process.env.NODE_ENV === 'development' ? hot(BaseApp) : BaseApp
