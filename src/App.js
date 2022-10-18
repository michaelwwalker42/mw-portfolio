import Helmet from "react-helmet";
import BackArrow from "./components/BackArrow";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Walker - Portfolio</title>
        <meta name="description" content="Portfolio website for web developer, Michael Walker." />
        <link rel="canonical" href="https://michaelwwalker42.github.io/react-tailwind-portfolio/" />
      </Helmet>
      <Navbar />
      <BackArrow />
      <Home />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
