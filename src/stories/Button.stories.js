import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Calculator/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const NumberButton = Template.bind({})
NumberButton.args = {
  label: '7',
  className:'function color'
}

export const OperatorButton = Template.bind({})
OperatorButton.args = {
  label: '+',
  className: 'operator'
}