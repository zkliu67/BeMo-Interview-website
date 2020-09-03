import React, { Component, Fragment } from 'react';

import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import LinkIcon from '@material-ui/icons/Link';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

import FontStyleButton from '../FontStyleButton';

import './PageOption.css';

class index extends Component {

  constructor(props) {
    super(props);
    const { cellLayout } = props;

    this.state = {
      content: this.getContent(cellLayout),
      newStyle: []
    }

    this.fontStyleList = [
      {style: 'bold', icon: <FormatBoldIcon />},
      {style: 'italic', icon: <FormatItalicIcon />},
      {style: 'strike', icon: <FormatStrikethroughIcon />},
      {style: 'link', icon: <LinkIcon/>},
      {style: 'center', icon: <FormatAlignCenterIcon/>}
    ]
  }

  getContent = (cellLayout) => {
    switch (typeof cellLayout.content) {
      case "string": {
        return cellLayout.content;
      }
      case "object": {
        let value = "";
        cellLayout.content.forEach(content => {
          if (content.text) {
            value += content.text;
          } else if (content.empty) {
            value += '\n';
          }
        });
        return value;
      }
      default: return null;
    }
  }

  mapLayoutToView = (cellLayout) => {
    let cellLabel = "";
    let type = "";
    let name = "";
    let value = "";
    let placeholder = "";
    let className = ""
    let action = ""

    switch (cellLayout.type) {
      case "imageView": {
        cellLabel = "Upload Image";
        return <br />;
      }
      case "textView": {
        cellLabel = "Title Content:";
        type = "text";
        name = cellLayout.key;
        value = this.state.content
        placeholder = this.state.content
        className = "text__input";
        return this.textInput(cellLabel, className, type, name, value, cellLayout, placeholder);
      }
      case "list": {
        cellLabel = "Paragraph:";
        type = "text";
        name = cellLayout.key;
        value = this.state.content
        placeholder = this.state.content
        className = "paragraph__input";
        return this.textInput(cellLabel, className, type, name, value, cellLayout, placeholder);

      }
      case "emptySpace": {
        break;
      }
    }
  }

  mapListToIcon = (style, icon, index) => {
    return <FontStyleButton key={index} style={style} icon={icon} passStyleToForm={this.handleStyle}/>
  }

  textInput = (cellLabel, className, type, name, value, cellLayout, placeholder) => {
    return (
      <Fragment>
        <form key={index} method="POST" onSubmit={this.handleSubmit}>
          <p>{cellLabel}</p>
          {cellLayout.type === "list" 
            ? <textarea onChange={this.handleChange} rows={8} className={className} type={type} name={name} value={value} placeholder={placeholder} />
            : <input onChange={this.handleChange} className={className} type={type} name={name} value={value} placeholder={placeholder} />
          }
          <div className="text__style">
            {this.fontStyleList.map((fontIcon, index) => {
              return this.mapListToIcon(fontIcon.style, fontIcon.icon, index);
            })}
            <select name="textLevel">
              <option value="span">span</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
            </select>
          </div>
          <input className="button__submit" type="submit" value="Update" />
        </form>
        <hr />
      </Fragment>
    )
  }

  handleStyle = (fontStyle, isCancel = false) => {
    let newStyle = this.state.newStyle;
    if (!isCancel) {
      newStyle.push(fontStyle);
    } else {
      newStyle = newStyle.map(style => style !== fontStyle);
    }
    this.setState({newStyle: newStyle});
  }

  handleChange = (event) => {
    this.setState({content: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // post new form to backend
    
  }

  render() {
    return (
      <div className="content__form">
        {this.mapLayoutToView(this.props.cellLayout)}
      </div>
      
    );
  }
}

export default index;