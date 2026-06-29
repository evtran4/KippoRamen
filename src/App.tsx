import './App.css';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import { menu } from './menu';
import { useRef } from 'react';

function App(): JSX.Element {
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="app">
      <Hero menu={menuRef}/>
      {menu.map((section) => (
        <div
          key={section.title}
          ref={section.title === "Ramen" ? menuRef : undefined}
        >
          <Gallery
            title={section.title}
            items={section.items}
          />
        </div>
      ))}
    </div>
  );
}

export default App;