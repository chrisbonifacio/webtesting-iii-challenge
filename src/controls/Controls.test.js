import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { initialState as _initialState, rootReducer  } from '../store/reducers'
import Controls from "./Controls"
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

test("Controls renders without crashing", () => {
  renderWithRedux(<Controls />, {initialState: _initialState})
})

test("Open/Close button toggles the closed state", () => {
  // Arrange

  // main component
  const { getByText, getByTestId } = renderWithRedux(<Dashboard />, {initialState: _initialState})

  // buttons
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")

  // Assert
  expect(openCloseButton.textContent).toBe("Close Gate")
  expect(lockButton.getAttribute("disabled")).toBeDefined()

  // Act
  fireEvent.click(openCloseButton)

  // Assert
  expect(openCloseButton.textContent).toBe("Open Gate")
  expect(lockButton.getAttribute("disabled")).toBeNull()
})

test("Lock button toggles the locked state", () => {
  // Arrange

  // main component
  const { getByText, getByTestId } = renderWithRedux(<Dashboard />, {initialState: _initialState})

  // buttons
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")

  // Assert
  expect(openCloseButton.textContent).toBe("Close Gate")
  expect(lockButton.getAttribute("disabled")).toBeDefined()

  // Act
  fireEvent.click(openCloseButton)

  // Assert
  expect(openCloseButton.textContent).toBe("Open Gate")
  expect(lockButton.getAttribute("disabled")).toBeNull()
})
