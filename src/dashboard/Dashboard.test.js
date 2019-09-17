import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { initialState as _initialState, rootReducer  } from '../store/reducers'
import Dashboard from "./Dashboard"

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

// Test away
test("Gate won't open when locked", () => {
  // Arrange
  // const { getByText, queryByTestId, getByTestId } = render(<Dashboard />)
  const { getByText, queryByTestId, getByTestId } = renderWithRedux(<Dashboard />, {
    initialState: _initialState
  })
  const display = queryByTestId("display")
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")
  const lockStatus = queryByTestId("lock-status")
  const openStatus = queryByTestId("open-status")

  // Act
  fireEvent.click(openCloseButton)
  fireEvent.click(lockButton)

  // Assert
  expect(lockStatus.textContent).toBe("Locked")
  expect(openStatus.textContent).toBe("Closed")

  // Act
  fireEvent.click(openCloseButton)

  // Assert
  expect(lockStatus.textContent).toBe("Locked")
  expect(openStatus.textContent).toBe("Closed")
})
