import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import TextView from './TextView';

export default class ListView extends Component {

  render() {
    const style = this.props.layout.style;
    const contentList = this.props.layout.content;
    return (
      <span style={style}>
        {contentList.map((content, index) => {
          if (content.text) {
            if (content.link) {
              return <Link to='#'>{content.text}</Link>
            } else {
              return content.text
            }
            
          } else if (content.empty) {
            return <br key={index}></br>
          } else if (content.type === "textView") {
            return <TextView layout={content} />
          }
        })}
      </span>
    )
  }
}
