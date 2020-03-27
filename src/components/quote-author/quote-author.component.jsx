import React from 'react'

const Author = ({ author, changingColor, transition }) => {
  return (
    <div
      id='author'
      style={{
        color: changingColor,
        transition: transition
      }}>
      <p>- {author}</p>
    </div>
  )
}

export default Author
