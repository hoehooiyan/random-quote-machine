import React from 'react'

const TweetQuote = ({ quoteText, changingColor, transition }) => {
  return (
    <div
      className='tweet-quote-container'
      style={{
        backgroundColor: changingColor,
        transition: transition
      }}>
      <a
        id='tweet-quote'
        href={`https://twitter.com/intent/tweet?text=${quoteText}&hashtags=quotes,randomquotes,qotd`}
        target='_blank'
        rel='noopener noreferrer'>
        <ion-icon name='logo-twitter'></ion-icon>
      </a>
    </div>
  )
}

export default TweetQuote
