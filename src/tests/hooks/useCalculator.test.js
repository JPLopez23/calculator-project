import { renderHook, act } from '@testing-library/react'
import useCalculator from '../../hooks/useCalculator'

describe('useCalculator', () => {
  test('initializes with zero', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  test('inputDigit adds digits to display', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.inputDigit(5))
    expect(result.current.display).toBe('5')
    act(() => result.current.inputDigit(6))
    expect(result.current.display).toBe('56')
  })

  test('clears display', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.inputDigit(5))
    act(() => result.current.clearDisplay())
    expect(result.current.display).toBe('0')
  })
})