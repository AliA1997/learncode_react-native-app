import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './Navigator';

export default class App extends Component {
  static router = Navigator.router;
  render() {
    return (
      <Provider store={store}>
        <Navigator navigation={this.props.navigation}/>
      </Provider>
    );
  }
}
