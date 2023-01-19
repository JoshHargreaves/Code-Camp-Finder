import React from "react";
import Head from "next/head";
import Layout from '../components/layout/layout';

export default function Home({results} : any): JSX.Element {
  return (
    <>
      <Head>
        <title>Code Camp Finder</title>
        <meta name="description" content="Code Camp Finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" className="rounded-full" />
      </Head>
      <Layout>
 
      </Layout>
    </>
  );
}