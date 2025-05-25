import React from 'react'
import Display from '../components/Display'

export default {
  title: 'Calculator/Display',
  component: Display
}

const Template = (args) => <Display {...args} />

export const DefaultDisplay = Template.bind({})
DefaultDisplay.args = {
  value: '0'
}