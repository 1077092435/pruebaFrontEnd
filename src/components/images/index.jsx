
import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";



class ImagesRender extends Component {
  constructor (props) {
    super(props);
    this.state = {
      products: [],
      headerItem: [],
    };
  }

  componentDidMount () {
    fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
    .then(response => response.json())
    .then(data => this.setState({ products: data}));
  }
  render () {

    const images = this.state.products.images;;
    const items = [];
    // eslint-disable-next-line 
      images?.map((image, index) => {
        items.push(
          // eslint-disable-next-line
              <img  key={index} src={image} className={this.props.className}/>
        );
      })  
    return (
        <Carousel
          width= {this.props.width}
          showThumbs={this.props.showThumbs}
        >
          {items}
        </Carousel>
    );
  }
}

export default ImagesRender;
