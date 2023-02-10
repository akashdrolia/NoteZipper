// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landingfile from "./screens/landingpage/Landingfile";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landingfile />
      </main>
      <Footer />
    </>
  );
}

export default App;
