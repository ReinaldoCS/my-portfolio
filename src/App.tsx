import { useState } from 'react';
import Header from '@/Components/Header';
import GlobalStyles from './global.css';
import ReadTheDocs from '@/Components/ReadTheDocs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
}

export default App;
