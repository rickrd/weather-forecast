import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAddress } from '../redux/actions'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;

  li {
    background-color: #fff;
    color: #000;
    padding: 5px;
    cursor: pointer;
    font-size: 12px;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
    border-left: 1px solid #999;
  }
`

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  }

  static defaultProps = {
    suggestions: []
  }

  constructor(props) {
    super(props)

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    }
  }

  onChange = e => {
    const { suggestions } = this.props
    const userInput = e.currentTarget.value
    this.props.dispatch(updateAddress(userInput))

    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    })
  }

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    })
    this.props.dispatch(updateAddress(e.currentTarget.innerText))
  }

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      })
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 })
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
  }

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput }
    } = this

    let suggestionsListComponent

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <Ul>
            {filteredSuggestions.map((suggestion, index) => {
              let className

              if (index === activeSuggestion) {
                className = 'suggestion-active'
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              )
            })}
          </Ul>
        )
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        )
      }
    }

    return (
      <Fragment>
        <input onChange={onChange} onKeyDown={onKeyDown} value={userInput} />
        {suggestionsListComponent}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    address: state.address
  }
}

export default connect(mapStateToProps)(Autocomplete)
