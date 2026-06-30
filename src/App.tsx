import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Menu from './pages/Menu/Menu';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/Menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;