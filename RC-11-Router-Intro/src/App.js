import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> //__ "*" yazarsak bunlar haricinde bir veri gelirse uygulanacak componenti gösterir.
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

//? Routes ile biz değişecek olanları bu alan içerisine alırız. Nav ve Footer her sayfada gözükeceği için bu alanın dışında yazılmalıdır.
