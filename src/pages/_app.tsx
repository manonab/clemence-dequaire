import React from "react";
import { AppProps } from "next/app";
import "./globals.css";
import { Layout } from "@common/layout";
import { ClassProvider } from "@context/className";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClassProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClassProvider>
  );
};

export default MyApp;
