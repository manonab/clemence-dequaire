import React from "react";
// import nextI18NextConfig from "../../next-i18next.config";
import { AppProps } from "next/app";
import './globals.css';
import Layout from "@common/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
