import { Header } from '@/Components/Header';
import GlobalStyles from './global.css';
import { Start } from './components/Start';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';

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
    </div>
  );
}

export default App;
