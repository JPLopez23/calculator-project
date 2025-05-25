import React from 'react'
import useCalculator from '../hooks/useCalculator'
import Display from './Display'
import Button from './Button'

export default function Calculator() {
  const calc = useCalculator()
  const buttons = [
    ['AC', 'function', c => c.clearDisplay()], ['+/-', 'function', c => c.toggleSign()], ['%', 'operator', c => c.performOperation('%')], ['÷', 'operator', c => c.performOperation('/')],
    ['7', 'number', c => c.inputDigit(7)], ['8', 'number', c => c.inputDigit(8)], ['9', 'number', c => c.inputDigit(9)], ['×', 'operator', c => c.performOperation('*')],
    ['4', 'number', c => c.inputDigit(4)], ['5', 'number', c => c.inputDigit(5)], ['6', 'number', c => c.inputDigit(6)], ['-', 'operator', c => c.performOperation('-')],
    ['1', 'number', c => c.inputDigit(1)], ['2', 'number', c => c.inputDigit(2)], ['3', 'number', c => c.inputDigit(3)], ['+', 'operator', c => c.performOperation('+')],
    ['0', 'number span-2', c => c.inputDigit(0)], ['.', 'number', c => c.inputDot()], ['=', 'operator', c => c.performOperation('=')]
  ]

  return (
    <div className="calculator">
      <Display value={calc.display} />
      <div className="keypad">{buttons.map(([label, cls, fn], i) => 
        <Button key={i} label={label} className={cls} onClick={() => fn(calc)} />)}
      </div>
    </div>
  )
}