// Import's
import Header from "../components/header/Header";
import Home from "./home/Home";
import Footer from "../components/footer/Footer";


// Construct Page
function Main() {
  return (
    <>
      <Header/>

      <main>

        <Home/>

      </main>
      
      <Footer/>
    </>
  )
}

// Export Page
export default Main