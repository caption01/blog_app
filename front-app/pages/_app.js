import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import withApolloClient from "../utils/apollo";
import PageLayout from "../component/layout/pageLayout";

import theme from "../style/theme";
import "../style/app.less";

class MyApp extends App {
  static async getInitialProps(appContexts) {
    const appProps = await App.getInitialProps(appContexts);

    return { ...appProps };
  }

  render() {
    const { Component, PageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <PageLayout>
            <Component {...PageProps} />
          </PageLayout>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
