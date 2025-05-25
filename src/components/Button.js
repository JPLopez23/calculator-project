import React from 'react'

export default function Button({ onClick, label, className = '' }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  )
}