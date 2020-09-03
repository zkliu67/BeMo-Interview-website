import React, { Component, Fragment } from 'react';
import '../static/css/Form.css';

export default class Form extends Component {

  state = {
    style: {},
    inputs: {},
    buttons: []
  }

  componentDidMount() {
    const {inputs, style, button} = this.props.layout
    this.setState({inputs: inputs, style: style, buttons: button});
  }
  
  loadFormView = (field, style, index) => {
    return (
      <Fragment>
          <label >
            {field.label}: {field.required ? "*" : ""}
          </label>
          <br />
          {
            field.type === "input" ?
            <input style={style.input} key={index} type="text" name={field.label} size={field.size}/> :
            <textarea style={style.input} key={index} name={field.label} rows={8} cols={38}/>
          }
          <br/>
          <br/>
        </Fragment>
    )
  }

  render() {
    const {inputs, style, buttons} = this.state;
    if (Object.keys(inputs).length !== 0 && Object.keys(style).length !== 0) {
      const {fields, style} = inputs;
      return (
        <form style={{textAlign: "center", width: "100%"}} method="POST">
          {fields.map((field, index) => {
            return this.loadFormView(field, style, index)
          })}
          <input type="hidden" name="form_token" value="" />
          {buttons.map((button, index) => {
            return (
              <input style={button.style} key={index} type={button.type} name={button.name} value={button.text} />
            )
          })}
        </form>
      )  
    } else {
      return <p>loading...</p>
    }
    
  }
}
