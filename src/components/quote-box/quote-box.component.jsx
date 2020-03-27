import React from 'react'

import Text from '../quote-text/quote-text.component.jsx'
import Author from '../quote-author/quote-author.component.jsx'
import TweetQuote from '../tweet-quote/tweet-quote.component.jsx'
import NewQuote from '../new-quote/new-quote.component.jsx'

const QuoteBox = ({
  text,
  author,
  handleNewQuoteClick,
  handleTweetClick,
  changingColor,
  transition
}) => {
  return (
    <div id='quote-box'>
      <Text text={text} changingColor={changingColor} transition={transition} />

      <Author
        author={author}
        changingColor={changingColor}
        transition={transition}
      />

      <div className='container'>
        <TweetQuote
          handleTweetClick={handleTweetClick}
          changingColor={changingColor}
          transition={transition}
          quoteText={text}
        />
        <NewQuote
          handleNewQuoteClick={handleNewQuoteClick}
          changingColor={changingColor}
          transition={transition}
        />
      </div>
    </div>
  )
}

export default QuoteBox
