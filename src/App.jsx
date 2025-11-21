import "./App.css";
import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const name = "Your Mom";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
        <p>
          Lorem W ipsum dolor sit amet consectetur adipisicing elit. Officiis
          illo cumque sit dignissimos, consectetur nemo possimus accusamus
          maxime excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
      </header>
      <Navbar />
      <CandyList />
      <Candies />

      {/* Footer component - Footer.jsx [rafce - footer>p>Made by name], Footer.css  */}
      <Footer />
    </>
  );
}

export default App;
