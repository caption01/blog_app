import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";

import withApolloClient from "../utils/apollo";

class MyApp extends App {
  static async getInitialProps(appContexts) {
    const appProps = await App.getInitialProps(appContexts);

    return { ...appProps };
  }

  render() {
    const { Component, PageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...PageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
