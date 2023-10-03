import React, { Component } from 'react';

export class ImageGallery extends Component {
    render() {
      const { children } = this.props;
  
      return <ul className='ImageGallery'>{children}</ul>;
    }
  }
