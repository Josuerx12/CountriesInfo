// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexts
import { ThemeProvider } from "./context/ThemeContext";
import { FilterProvider } from "./context/FilterContext";

// Components
import Header from "./components/header/Header";

// pages
import CountryDetail from "./pages/countryDetail/CountryDetail";
import Home from "./pages/home/Home";
import Err from "./pages/err/Err";

const App = () => {
  return (
    <FilterProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info/:countryName" element={<CountryDetail />} />
            <Route path="*" element={<Err />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </FilterProvider>
  );
};

export default App;
