import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Category from './components/Category';
import UPenn from './components/UPenn';
import Moesif from './components/Moesif';
import Freelance from './components/Freelance';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/upenn" element={<UPenn />} />
          <Route path="/moesif" element={<Moesif />} />
          <Route path="/freelance" element={<Freelance />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
