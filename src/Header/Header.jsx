import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      data: 'lllll',
      loop: [
        { name: 'ddd' },
        { name: 'ddd1' },
        { name: 'ddd2' },
        { name: 'ddd3' },
        { name: 'dd4d' },
      ],
      ff: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
      x: true,
    }
  }

  componentWillMount = () => {
    console.log('Header will mount')
  }

  componentDidMount = () => {
    console.log('Header mounted')
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Header will receive props', nextProps)
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Header will update', nextProps, nextState)
  }

  componentDidUpdate = (prevProps,prevState) => {
    console.log('Header did update',prevState)
  }

  componentWillUnmount = () => {
    console.log('Header will unmount')
  }
  // functions
  test = () => {
    this.setState({
      data: 'kareem',
    })
  }
  handleSort = (data) => {
    alert(data)
  }

  render() {
    let { meta } = this.props

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return (
      <div className="HeaderWrapper">
        <div>
          <p>meta:{meta}</p>
          <ul>
            {this.state.loop.map((d) => (
              <li key={d.name}> {d.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {this.state.ff.map((d) => (
              <li>{d.id}</li>
            ))}
            {this.state.x ? <div>ok</div> : <div>not ok</div>}
            {(() => {
              if (this.state.x) {
                return <div>someCase</div>
              } else if (!this.state.x) {
                return <div>otherCase</div>
              } else {
                return <div>catch all</div>
              }
            })()}
          </ul>
          <div>

            {
              (
                ()=>{
                  if(this.state.x){
                  return  (<div>
                    someCase <div>someCase</div> <div>someCase</div>
                    </div>)
                  }
                }
              )()
            }
          </div>
          <ul>
            <li>{this.state.loop.map(x=>(<div key={x.name}>{x.name}</div>))}</li>
          </ul>
          <div className={(this.state.x === true ? 'three' : 'two', 'one two')}>
            one{' '}
          </div>
          {this.state.x === true ? 'true' : 'false'}
        </div>
        Test Header Header Header Header {this.props.meta}
        <button onClick={this.test}>click2</button>
        <button onClick={this.handleSort.bind(this, 123)}>click2sssssss</button>
        <button onClick={this.handleSort.bind(this, 1)}>click2sssssss</button>
        <button onClick={this.handleSort.bind(this, 2)}>click2sssssss</button>
        <button onClick={this.handleSort.bind(this, 1323)}>
          click2sssssss
        </button>
        <button onClick={this.handleSort.bind(this, 4)}>click2sssssss</button>
        <button onClick={this.handleSort.bind(this, 5)}>click2sssssss</button>
        {this.state.data}
      </div>
    )
  }
}

Header.propTypes = {
  // bla: PropTypes.string,
}

Header.defaultProps = {
  // bla: 'test',
}

export default Header
