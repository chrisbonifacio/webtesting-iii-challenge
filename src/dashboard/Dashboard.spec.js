import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Dashboard from "./Dashboard"

// Test away
test("Gate won't open when locked", () => {
  // Arrange
  const { getByText, queryByTestId, getByTestId } = render(<Dashboard />)
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
