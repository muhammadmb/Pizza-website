import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro/Intro';
import Products from './Components/Products/Products';
import { productData, productDataTwo } from './Components/Products/Data';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Intro />
        <Products heading="choose your favorite" data={productData} />
        <Feature />
        <Products heading="Sweet Treats for You" data={productDataTwo} />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
