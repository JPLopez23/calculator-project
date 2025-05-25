import React from 'react'
import { render } from '@testing-library/react'
import Display from '../../components/Display' 

test('renders display with value', () => {
  const { getByTestId } = render(<Display value="123" />)
  expect(getByTestId('display').textContent).toBe('123')
})