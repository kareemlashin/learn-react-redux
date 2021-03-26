import React, { PureComponent } from 'react'

class Sup extends PureComponent {
  constructor(props) {
    super(props)
    this.InputRef = React.createRef()
    this.state = {
      hasError: false,
      dd: 'dddddd',
      r: [15, 54, 87, 96, 63, 21, 54],
    }
  }

  componentDidMount = () => {
    console.log('Sup mounted')
    this.InputRef.current.style.color = '#098'
  }

  
  dddd = (ff) => {
    let y = this
    this.setState({
      ...y.state,
      dd: ff,
    })
    this.InputRef.current.style.backgroundColor = '#09a'
  }

  bb = () => {
    this.props.z('data data data data')
  }

  render() {
    let { p, e, x } = this.props
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className="SupWrapper">
        <button onClick={this.bb}>bb bb</button>
        {
          /* 

          */

          this.state.r.map((x) => (
            <li key={x}>{x}</li>
          ))
        }
        {this.props.children[0]}
        {this.props.children[1]}
        {this.props.children[2]}
        {this.props.children[3]}
        {this.props.children}
        <div ref={this.InputRef}>InputRef InputRef InputRef</div>
        {(() => {
          if (this.state.hasError) {
            return <div>ddddddd</div>
          } else {
            return <div>zzzzzz</div>
          }
        })()}
        <div className={this.state.hasError ? 'one' : 'two'}>two</div>
        <div style={{ color: this.state.hasError ? 'blue' : '#09c' }}>000</div>
        Test sup {p}
        {e}
        {x}
        <div>
          {this.state.dd}
          <button
            onClick={this.dddd.bind(this, 'ddddddddddddddddddddddddddddd')}
          >
            change
          </button>
        </div>
      </div>
    )
  }
}


export default Sup
