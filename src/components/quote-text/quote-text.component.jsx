import React from 'react'

const Text = ({ changingColor, text, transition }) => {
  return (
    <div
      id='text'
      style={{
        color: changingColor,
        transition: transition
      }}>
      <p>&quot; {text}</p>
    </div>
  )
}

export default Text
