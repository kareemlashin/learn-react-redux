import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
//import { Test } from './Child.styles';

class Child extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <Fragment>
        Fragment Fragment Fragment
        <div>dddddd</div>
      </Fragment>
    )
  }
}

Child.propTypes = {
  // bla: PropTypes.string,
}

Child.defaultProps = {
  // bla: 'test',
}

export default Child
