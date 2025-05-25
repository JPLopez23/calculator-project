import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Calculator/Operators',
  parameters: {
    layout: 'centered'
  }
}

const Template = () => (
  <div className="Operators" style={{ 
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '200px' 
  }}>
    <Button label="%" className="operator" />
    <Button label="÷" className="operator" />
    <Button label="×" className="operator" />
    <Button label="-" className="operator" />
    <Button label="+" className="operator" />
    <Button label="=" className="operator" />
  </div>
)

export const DefaultOperators = Template.bind({})