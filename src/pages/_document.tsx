// Next/React Import
import Document, { Html, Head, Main, NextScript } from "next/document";


// Import's
import Metas from "./Metas/Metas";
import Heading from "./Heading/Heading";


// Construct Page
export default class MyDocument extends Document {
      render() {
            return (
                  <Html>
                        <Head>
                          <Metas/>
                          <Heading/>
                        </Head>
                        <body>
                              <Main/>
                              <NextScript/>
                        </body>
                  </Html>
            )
      }
}