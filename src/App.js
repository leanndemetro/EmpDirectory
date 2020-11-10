import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={Search} /> */}
         <Search />
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
