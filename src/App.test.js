import { render, screen } from '@testing-library/react'
import App from './App'

test('renders calculator', () => {
  render(<App />)
  const displayElement = screen.getByTestId('display')
  expect(displayElement).toBeInTheDocument()
})