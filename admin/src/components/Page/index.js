import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import LinkIcon from '@material-ui/icons/Link';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

import PageOption from '../PageOption';
import './Page.css';

class Page extends Component {

  state = {pageLayout: []};

  getPageLayout = (pageKey) => {
    this.setState({isLoading: true});

    return axios.get(
      `http://localhost:8080/api/page-layout`,
      {params: {pageTitle: pageKey}}
    ).then(result => {
      this.setState({
        pageLayout: result.data.data,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
    })
  }

  async componentDidMount() {
    let pageKey = this.props.match.params.pageTitle;
    const regex = /[^a-zA-Z]/g;
    pageKey = (pageKey === '/') ? 'homepage' : pageKey.replace(regex, '')
    await this.getPageLayout(pageKey)
  }

  render() {
    const pageLayout = this.state.pageLayout;
    return (
      <div className="page">
        {pageLayout.map((cellLayout, index) => {
          return <PageOption key={index} cellLayout={cellLayout} />
        })}
      </div>
    )
  }
}

export default withRouter(Page);
