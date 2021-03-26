import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { Test } from './Base.styles';
import Pass from './../Pass/Pass'
class Base extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      pass: '',
    }
  }
  pass = (pa) => {
    this.setState({
      ...this.state,
      pass: pa,
    })
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className="BaseWrapper">
        Test content <Pass m={this.pass} />
        {this.state.pass}
      </div>
    )
  }
}

export default Base
