import React from "react";
import Layout from "./layout";
import { AppProps } from "next/app";
function PostPage({ Component, pageProps }: any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default PostPage;
