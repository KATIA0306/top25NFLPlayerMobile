import React, {Component} from 'react';

import { Platform } from 'react-native';

import { ApolloProvider} from 'react-apollo'; 

import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

import Navigator from './Navigator';

const client = new ApolloClient({
  
  cache: new InMemoryCache(),

  link: new HttpLink({uri: Platform.select({
      ios: 'http://localhost:5000/graphql',
      android: 'http://10.0.2.2:4000/graphql'
    })
  })
})


type Props = {};
export default class App extends Component<Props> {
  render() {
console.log("client", client)
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}