import React, { Component } from 'react'

export default class index extends Component {
  
  state = {font: this.props.style, style: {}, isClicked: false};

  handleClick = () => {
    let clicked = this.state.isClicked;
    if (clicked) {
      this.setState({isClicked: false});
      this.setState({style: {}});
      this.props.passStyleToForm(this.state.font, true);
    } else {
      this.setState({isClicked: true});
      this.setState({style: {backgroundColor: "darkcyan", color: "white"}});
      this.props.passStyleToForm(this.state.font);
    }
  }

  render() {
    const { icon  } = this.props;
    return (
      <span style={this.state.style} onClick={() => this.handleClick()}>{icon}</span>
    )
  }
}
