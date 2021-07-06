import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';
import theme from '@material/theme';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <div id="page-transition" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {

    const materialSheet = new ServerStyleSheets();
    const styledComponentSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    styledComponentSheet.collectStyles(
                        materialSheet.collect(<App {...props} />),
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                materialSheet.getStyleElement(),
                styledComponentSheet.getStyleElement(),
            ],
        };
    } finally {
        styledComponentSheet.seal();
    }
};

export default MyDocument;