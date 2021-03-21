import React, { Component} from 'react';

class EyesOnMe extends Component {

  handleFocusEvent = () => {
    console.log("Good!")
  }

  handleBlurEvent = () => {
    console.log("Hey! Eyes on me!")
  }
  render() {
    return (
        <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}>
          Eyes on me, please!
        </button>
    )
  }
}

export default EyesOnMe;