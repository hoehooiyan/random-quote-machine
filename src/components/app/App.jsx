import React from 'react'

import QuoteBox from '../quote-box/quote-box.component.jsx'
import Copyright from '../copyright/copyright.component.jsx'

import '../../main.scss'

import generateRandomNum from '../../utils/generateRandomNum'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: [
        '248bcc',
        '008996',
        '17462e',
        'ca6641',
        '595a5c',
        '5c2935',
        '6a5287',
        '81a6aa',
        '3c343d',
        '7cb083',
        'c89fa5',
        '112200',
        '2e5090',
        '9c8a4d',
        '990020'
      ],
      quotes: [],
      isClicked: false,
      isLoaded: false
    }
  }

  componentDidMount() {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          quotes: [...json.quotes],
          isLoaded: !this.state.isLoaded
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleNewQuoteClick = e => {
    if (e) {
      this.setState({
        isClicked: !this.state.isClicked
      })
    }
  }

  render() {
    const { colors, isLoaded, quotes } = this.state
    const randomQuotes = generateRandomNum(quotes)
    const colorChanged = `#${colors[generateRandomNum(colors)]}`
    const transitionProps = 'all 2s'

    return (
      <div
        id='app'
        style={{
          backgroundColor: colorChanged,
          transition: transitionProps
        }}>
        <QuoteBox
          text={isLoaded ? quotes[randomQuotes].quote : 'Loading...'}
          author={isLoaded ? quotes[randomQuotes].author : 'Loading...'}
          handleNewQuoteClick={this.handleNewQuoteClick}
          changingColor={colorChanged}
          transition={transitionProps}
        />
        <Copyright />
      </div>
    )
  }
}

export default App
