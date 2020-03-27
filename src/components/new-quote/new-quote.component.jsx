import React from 'react'

const NewQuote = ({ handleNewQuoteClick, changingColor, transition }) => {
  return (
    <button
      className='new-quote'
      onClick={handleNewQuoteClick}
      style={{
        backgroundColor: changingColor,
        transition: transition
      }}>
      New quote
    </button>
  )
}

export default NewQuote
