// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {clicked: 0}

  onClicked = () => {
    this.setState(prevState => ({clicked: prevState.clicked + 1}))
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count"> {clicked} </span>
          times
        </h1>
        <p className="label">Click the button to increase the count!</p>
        <button className="button" onClick={this.onClicked}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
