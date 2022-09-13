import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="./airplane.png" type="image/PNG" />
          {/* font-family: 'Barlow', sans-serif; 500 600
              font-family: 'Poppins', sans-serif; 400 500 600 700 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
