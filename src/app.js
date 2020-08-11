import 'intersection-observer' // Intersection Observer Polyfill
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './components/Homepage'
import './assets/styles/style.css'

ReactDOM.render(<Homepage />, document.getElementById('app'))
