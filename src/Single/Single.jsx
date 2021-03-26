import React, { PureComponent ,Fragment} from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Single.styles';
import Child from '../Child/Child'
class Single extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Single will mount');
  }

  componentDidMount = () => {
    console.log('Single mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Single will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Single will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Single did update');
  }

  componentWillUnmount = () => {
    console.log('Single will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SingleWrapper">
        Test content {this.props.match.params.id}
        <Child ></Child>
      </div>
    );
  }
}

Single.propTypes = {
  // bla: PropTypes.string,
};

Single.defaultProps = {
  // bla: 'test',
};

export default Single;
