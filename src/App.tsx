import { Header } from '@/Components/Header';
import GlobalStyles from './global.css';
import { Start } from './components/Start';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Start />
      <Skills />
    </div>
  );
}

export default App;
