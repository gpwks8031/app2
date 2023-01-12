import { Route, Routes } from "react-router-dom";
import About from "./sub/About";
import Business from "./sub/Business";
import Product from "./sub/Product";
import Online from "./sub/Online";
import Service from "./sub/Service";
import Home from "./sub/Home";
import Main from "./sub/Main";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/product" element={<Product />} />
          <Route path="/online" element={<Online />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
