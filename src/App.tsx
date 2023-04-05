import { Header } from '@/Components/Header';
import { Start } from './components/Start';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import GlobalStyles from './global.css';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Start />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
