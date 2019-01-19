import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import './style.css'
import Store from './Store/Store'
import {Provider} from 'react-redux'

const root = document.querySelector('#root')


render(
    <Provider store={Store}>
        <App />
    </Provider>,root
)

