import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Menu from './pages/BasicMenu/Menu';
import Contact from './pages/Contact/Contact';
import Loyalty from './pages/Loyalty/Loyalty';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Loyalty" element={<Loyalty />} />
      </Route>
    </Routes>
  );
}

export default App;