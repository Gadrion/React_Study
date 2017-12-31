import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="Display">Result : { this.props.text }</div>
    );
  }
}

export default Display;
