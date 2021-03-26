import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Form extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      hasError: false,
      v: 'dd',
      textarea: '',
      option: '',
      radio: '',
      checked:false
    };
  }

  componentWillMount = () => {
    console.log ('Form will mount');
  };

  componentDidMount = () => {
    console.log ('Form mounted');
  };

  componentWillReceiveProps = nextProps => {
    console.log ('Form will receive props', nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log ('Form will update', nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log ('Form did update');
  };

  componentWillUnmount = () => {
    console.log ('Form will unmount');
  };
  value = e => {
    this.setState ({
      v: e.target.value,
    });
  };
  textarea = e => {
    this.setState ({
      textarea: e.target.value,
    });
  };
  option = e => {
    this.setState ({
      option: e.target.value,
    });
  };
  radio = e => {
    this.setState ({
      radio: e.target.value,
    });
  };
  go = e => {
    e.preventDefault ();
    console.log (this.state.v);
  };
  chex=(e)=>{
this.setState({
  ...this.state,
  checked:e.target.checked
})
  }
  formk=()=>{

  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FormWrapper">
        Test Form Form
        <form onSubmit={this.go}>
          <div>
            <input type="text" onChange={this.value} name="" placeholder="" />
          </div>
          {this.state.v}
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              onChange={this.textarea}
              rows="10"
            />
          </div>
          {this.state.textarea}
          <div>
            <select name="" onChange={this.option} id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="13">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {this.state.option}
          <div>
            <input
              type="radio"
              onChange={this.radio}
              name="radio"
              value="1"
              placeholder=""
            />
            <input
              type="radio"
              onChange={this.radio}
              name="radio"
              value="2"
              placeholder=""
            />
          </div>
          {this.state.radio}
          <div />
          <div>
            <input type="checkbox" onChange={this.chex} checked={this.state.checked}/>
            <div className="one">{this.state.checked?'1':'2'}</div>
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  // bla: PropTypes.string,
};

Form.defaultProps = {
  // bla: 'test',
};

export default Form;
