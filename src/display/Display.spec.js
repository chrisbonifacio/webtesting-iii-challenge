import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Dashboard from "../dashboard/Dashboard"

// Test away!

test("Display updates correctly when lock is toggled", () => {
  const { getByText, queryByTestId, getByTestId } = render(<Dashboard />)

  // Arrange
  // gather elements to be tested
  const display = queryByTestId("display")
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")
  const lockStatus = queryByTestId("lock-status")
  const openStatus = queryByTestId("open-status")

  // Act`
  // fire off events
  fireEvent.click(openCloseButton)

  // Assert
  // evaluate changes
  expect(Array.from(display.classList)).toEqual(["display", "panel"])
  expect(Array.from(openStatus.classList)).toEqual(["led", "red-led"])
  expect(openStatus.textContent).toMatch("Closed")
  expect(openCloseButton.textContent).toMatch("Open Gate")
})
