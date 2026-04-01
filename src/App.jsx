import './App.css';
import HeroBody from './Component/HeroBody';
import NavBar from './Component/NavBar';
import Counting from './Component/Counting';
import CardArea from './Component/CardArea';
import Cards from './Component/Cards';
import GetStarted from './Component/GetStarted';
import { Suspense, useState } from 'react';

const dataInfo = fetch('/information.json').then(res => res.json());

function App() {
  const [activeTab, setActiveTab] = useState('Products');
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev =>
      prev.find(item => item.id === product.id) ? prev : [...prev, product],
    );
   
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <NavBar />
      <HeroBody />
      <Counting />
      <CardArea />

      {/* Tab buttons */}
      <div className="flex justify-center gap-3 mt-5 mb-5">
        <button
          onClick={() => setActiveTab('Products')}
          className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === 'Products'
              ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab('Cart')}
          className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === 'Cart'
              ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      <Suspense fallback={<p className="text-center mt-10">Data Loading...</p>}>
        <Cards
          dataInfo={dataInfo}
          activeTab={activeTab}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
      </Suspense>
      <GetStarted/>
    
    </>
  );
}

export default App;
