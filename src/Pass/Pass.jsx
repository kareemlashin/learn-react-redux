import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Pass.styles';

class Pass extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
r=()=>{
  this.props.m('dddddddddddddddddddddddddddd');
}
  componentWillMount = () => {
    console.log('Pass will mount');
  }

  componentDidMount = () => {
    console.log('Pass mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Pass will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Pass will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Pass did update');
  }

  componentWillUnmount = () => {
    console.log('Pass will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="PassWrapper">
        Test content <button onClick={this.r}>rrr</button>
      </div>
    );
  }
}

Pass.propTypes = {
  // bla: PropTypes.string,
};

Pass.defaultProps = {
  // bla: 'test',
};

export default Pass;
