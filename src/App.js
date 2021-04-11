import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Intro />
      </BrowserRouter>

    </div>
  );
}

export default App;
