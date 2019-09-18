import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { initialState as _initialState, rootReducer  } from '../store/reducers'
import { toggleLocked, toggleClosed } from '../store/actions'
import Dashboard from "../dashboard/Dashboard"

function renderWithRedux(
  component,
  { 
    initialState,
    store = createStore(rootReducer, initialState)
  } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

// Test away!
test("Gate renders with default props of unlocked and open", () => {
  const gate = renderWithRedux(<Dashboard />, {initialState: _initialState})

  expect(gate).toMatchSnapshot()
})

test("Display updates correctly when lock and closed are toggled",  () => {
  // Arrange
  const { getByText, queryByTestId, getByTestId, store } = renderWithRedux(<Dashboard />, {initialState: _initialState})
  var { locked, closed } = store.getState()

  const display = queryByTestId("display")
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")
  const lockStatus = queryByTestId("lock-status")
  const openStatus = queryByTestId("open-status")

  // Act
  store.dispatch(toggleClosed())
  var { closed, locked } = store.getState()
  
  // Assert
  expect(Array.from(display.classList)).toEqual(["display", "panel"])
  expect(Array.from(openStatus.classList)).toEqual(["led", "red-led"])
  expect(openStatus.textContent).toBe("Closed")
  expect(openCloseButton.textContent).toBe("Open Gate")
  expect(closed).toBe(true)
  
  // Act
  store.dispatch(toggleLocked())

  var { closed, locked } = store.getState()
  
  // Assert
  expect(Array.from(lockStatus.classList)).toEqual(["led", "red-led"])
  expect(closed).toBe(true)
  expect(locked).toBe(true)
})
