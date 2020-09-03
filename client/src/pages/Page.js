import React, { Component } from 'react';
import axios from 'axios';
import TextView from '../components/TextView';
import ListView from '../components/ListView';
import Form from '../components/Form';
import '../static/css/Page.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {pageLayout: [], isLoading: false}
  }

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
    let pageKey = this.props.pageKey;
    const regex = /[^a-zA-Z]/g;
    pageKey = (pageKey === '/') ? 'homepage' : pageKey.replace(regex, '')
    await this.getPageLayout(pageKey)
  }

  mapLayoutToView = (cellLayout, index) => {
    switch (cellLayout.type) {
      case "emptySpace": {
        return (
          <span><br/></span>
        )
      }
      case "textView": {
        return (
          <TextView layout={cellLayout} />
        ) 
      }
      case "list": {
        return <ListView layout={cellLayout} />
      }
      case "form": {
        return <Form layout={cellLayout} />
      }
    }
  }

  loadImageSection = (imageLayout) => {
    const imageUrl = `./${imageLayout.imageName}.png`;
    const reqSvgs = require.context('../static/images', true, /\.png$/);
    const allSvgFilepaths = reqSvgs.keys();
    let imagePath = '';
    for (let filePath of allSvgFilepaths) {
      if (filePath === imageUrl) {
        imagePath = filePath;
        break;
      }
    }
    const image = imagePath !== '' ? reqSvgs(imagePath) : reqSvgs('');
    return <img className="featureImg" src={`${image}`} alt="" />
  }

  loadPageImage = (imageUrl) => {
    const url = `./${imageUrl}.png`;
    const reqSvgs = require.context('../static/images', true, /\.png$/);
    const allSvgFilepaths = reqSvgs.keys();
    let imagePath = '';
    for (let filePath of allSvgFilepaths) {
      console.log(filePath, url);
      if (filePath === url) {
        imagePath = filePath;
        break;
      }
    }
  }

  render() {
    const { pageLayout, isLoading } = this.state;
    if (pageLayout.length < 1) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="wrapper">
          {pageLayout[0].type === "imageView" ? 
          this.loadImageSection(pageLayout[0]):
            null
          }
          <div className="section">
              {pageLayout.map((cellLayout, index) => {
                return (
                    this.mapLayoutToView(cellLayout, index)
                )
              })}
          </div>
        </div>
        
      )
      
    }
    
  }
}

export default Page;