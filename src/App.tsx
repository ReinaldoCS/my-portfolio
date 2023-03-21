import { Header } from '@/Components/Header';
import GlobalStyles from './global.css';
import { Start } from './components/Start';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Start />
      <Start />
      <Start />
    </div>
  );
}

export default App;
