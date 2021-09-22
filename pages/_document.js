import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  render() {

    return (
      <Html  >
        <Head />
        <body className="dark:bg-[#1E2028] text-gray-700 bg-gray-50 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
//#282c35
//#16161a

//#373a3c
//#14171c
//1c1e22
//#1E2028
