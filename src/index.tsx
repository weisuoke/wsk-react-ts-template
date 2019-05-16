import * as React from 'react'
import * as ReactDOM from 'react-dom'

type MyProps = {
  message: string;
}

type MyState = {
  count: number
}

class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
        <button>click me</button>
      </div>
    )
  }
}

ReactDOM.render(<App message={'hello'} />, document.getElementById('root'))