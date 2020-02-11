import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
//将虚拟dom渲染至真实DOM 初次渲染~