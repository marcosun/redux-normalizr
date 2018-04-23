/**
 * @module Demo/Post
 */
import React from 'react';
import {hot} from 'react-hot-loader';

import Demo from 'js-component-seed';

@hot(module)
/**
 * Export a form call api with post method
 */
export default class Component extends React.Component {
  /**
   * Contstructor function
   * @param {Object} props - Props
   */
  constructor(props) {
    super(props);
    alert(Demo());
  }

  /**
   * Render a form sending post data
   * @return {Component}
   */
  render() {
    return null;
  }
}
