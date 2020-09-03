import React, { Component } from 'react';

class TextView extends Component {

  state = { 
    tag: "p", 
    style: {},
    content: ""
 };

  componentDidMount() {
    let mTag = this.props.layout.textTag == null ? "p" : this.props.layout.textTag;
    const style = this.props.layout.style;
    const content = this.props.layout.content;
    
    this.setState({
      tag: mTag,
      style: style,
      content: content
    })
  }

  getTextView = (decoration, content) => {
    switch (decoration) {
      case "underline": {
        return <u>{content}</u>
      }
      default: {
        return content
      }
      // case "p": {
      //   return <p style={style}>{content}</p>
      // }
      // case "h1": {
      //   return <h1 style={style}>{content}</h1>
      // }
      // case "h2": {
      //   return <h2 style={style}>{content}</h2>
      // }
      // case "h3": {
      //   return <h3 style={style}>{content}</h3>
      // }
      // case "h4": {
      //   return <h4 style={style}>{content}</h4>
      // }
      // case "h5": {
      //   return <h5 style={style}>{content}</h5>
      // }
    }
  }

  render() {
    const {decoration, style, content} = this.state;
    return (
      <span style={style}>
        {this.getTextView(decoration, content)}
      </span>
      
    )
  }
}

export default TextView;