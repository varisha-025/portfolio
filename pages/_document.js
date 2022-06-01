import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Playfair+Display&family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument