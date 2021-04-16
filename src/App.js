import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro/Intro';
import Products from './Components/Products/Products';
import { productData } from './Components/Products/Data';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Intro />
        <Products heading="choose your favorite" data={productData} />
      </BrowserRouter>

    </div>
  );
}

export default App;
