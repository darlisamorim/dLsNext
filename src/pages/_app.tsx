// Next/React Import
import { AppProps } from "next/app";


// Style Import
import '../styles/globals.css';


// Construct Page
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

// Export Page
export default App