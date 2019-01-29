import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import * as config from './utilities/config';
import Navigator from './Navigator';
//Import apollo configuration.
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Define your graphql client which will be responsible for retrieving data, and updating via queries, mutations, and subscriptions using apollo.
const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // link: httpLink,
  link: new HttpLink({uri: config.server, useGETForQueries: true}),
  // link: new HttpLink(),
  cache: new InMemoryCache()
});


export default class App extends Component {
  static router = Navigator.router;
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navigator navigation={this.props.navigation}/>
        </Provider>
      </ApolloProvider>
    );
  }
}
