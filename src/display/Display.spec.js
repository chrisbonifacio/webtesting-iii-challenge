import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Dashboard from "../dashboard/Dashboard"

// Test away!
test("Gate renders with default props of unlocked and open", () => {
  const gate = render(<Dashboard />)

  expect(gate).toMatchSnapshot()
})

test("Display updates correctly when lock is toggled", () => {
  // Arrange
  const { getByText, queryByTestId, getByTestId } = render(<Dashboard />)
  const display = queryByTestId("display")
  const openCloseButton = getByTestId("open-close-button")
  const lockButton = getByTestId("lock-button")
  const lockStatus = queryByTestId("lock-status")
  const openStatus = queryByTestId("open-status")

  // Act`
  fireEvent.click(openCloseButton)

  // Assert
  expect(Array.from(display.classList)).toEqual(["display", "panel"])
  expect(Array.from(openStatus.classList)).toEqual(["led", "red-led"])
  expect(openStatus.textContent).toBe("Closed")
  expect(openCloseButton.textContent).toBe("Open Gate")
})
