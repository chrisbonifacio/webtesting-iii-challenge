import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import "./index.css"

import { rootReducer } from "./store/reducers"

import Dashboard from "./dashboard/Dashboard"

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("root")
)
