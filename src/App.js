import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form/Form.jsx";
import Genre from "./pages/Genre/Genre.jsx";
import Info from "./pages/Info/Info.jsx";
import Movies from "./pages/Movies/Movies.jsx";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/info" element={<Info />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
