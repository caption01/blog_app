import React, { useState, useEffect } from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

import withApolloClient from "../utils/apollo";
import PageLayout from "../component/layout/pageLayout";

import theme from "../style/theme";
import "../style/app.less";

const MyApp = (props) => {
  const { Component, PageProps, apollo } = props;
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const isMoblie = window.innerWidth <= 768;
    setIsMobile(isMoblie);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize());
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={{ ...theme, isMobile }}>
        <PageLayout>
          <Component {...PageProps} />
        </PageLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
};

App.getInitialProps = async (ctx) => {
  const appProps = await { ...ctx };

  return { ...appProps };
};

export default withApolloClient(MyApp);
