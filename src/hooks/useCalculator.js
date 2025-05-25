import { useState } from 'react'

export default function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit) => {
    if (display.length >= 9) return
    if (waitingForOperand) {
      setDisplay(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }
    if (!display.includes('.') && display.length < 9) {
      setDisplay(display + '.')
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const toggleSign = () => {
    if (display === '0') return
    if (display.length >= 9) return
    const newValue = display.startsWith('-') ? display.slice(1) : '-' + display
    setDisplay(newValue)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (storedValue === null) {
      setStoredValue(inputValue)
    } else if (operation) {
      const result = calculate(storedValue, inputValue, operation)
      setDisplay(String(result).slice(0, 9))
      setStoredValue(result)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    let result
    switch (operation) {
      case '+': result = firstValue + secondValue; break
      case '-': result = firstValue - secondValue; break
      case '*': result = firstValue * secondValue; break
      case '/': result = firstValue / secondValue; break
      case '%': result = firstValue % secondValue; break
      default: return secondValue
    }

    if (result > 999999999 || result < 0) return 'ERROR'
    if (String(result).length > 9) return 'ERROR'
    return result
  }

  return { display, inputDigit, inputDot, clearDisplay, toggleSign, performOperation }
}