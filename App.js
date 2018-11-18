import React, {Component} from 'react';
import Navigator from './Navigator';


export default class App extends Component {
  static router = Navigator.router;
  render() {
    return <Navigator navigation={this.props.navigation}/>;
  }
}
