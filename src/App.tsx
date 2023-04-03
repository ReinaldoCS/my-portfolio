import { Header } from '@/Components/Header';
import GlobalStyles from './global.css';
import { Start } from './components/Start';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Project } from './components/Project';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Start />
      <Skills />
      <About />
      <Project />
    </div>
  );
}

export default App;
