import React from 'react'

export default function Display({ value }) {
  return (
    <div className="display" data-testid="display">
      {value}
    </div>
  )
}