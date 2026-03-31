import React, { use } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteOutline } from 'react-icons/md';

const Cards = ({
  dataInfo,
  activeTab,
  cart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const data = use(dataInfo);

  const displayData = activeTab === 'Products' ? data : cart;

  const handleAddToCart = product => {
    onAddToCart(product);
    toast.success(`🛒 ${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleRemoveFromCart = product => {
    onRemoveFromCart(product.id);
    toast.error(`🗑️ ${product.name} removed from cart`, {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (displayData.length === 0) {
    return (
      <>
        <ToastContainer />
        <p className="text-center w-300 mx-auto p-10 text-2xl text-gray-400 mt-10 mb-5 border border-gray-300 shadow">
          {activeTab === 'Cart'
            ? '🛒 Your cart is empty.'
            : 'No products found.'}
        </p>
      </>
    );
  }

  // Add to Cart Section
  if (activeTab === 'Cart') {
    return (
      <>
        <ToastContainer />
        <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 p-5">
          {displayData.map(product => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-xl p-5 shadow hover:shadow-lg transition gap-4 flex items-center justify-between"
            >
              <div className="flex items-center  gap-4">
                <div>
                  {/* Image */}
                  <img
                    className="border-4 border-purple-200 rounded-full w-24 h-24 object-cover"
                    src="/assets/products/writing_2327400 1.png"
                    alt={product.name}
                  />
                </div>
                {/* Heading */}
                <div>
                  {/* Name */}
                  <h2 className="text-2xl font-bold">{product.name}</h2>

                  {/* Price */}

                  <p className="text-xl font-semibold text-purple-700">
                    ${product.price}
                    <span className="text-sm text-gray-400 font-normal">
                      {' '}
                      / {product.period}
                    </span>
                  </p>
                </div>
              </div>
                {/* Button */}
              <div>
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    className=" text-red-600 rounded-full"
                  >
                    <MdDeleteOutline className="text-[40px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  // ✅ Products view — full card as before
  return (
    <>
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {displayData.map(product => {
          const isInCart = cart.some(item => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border border-gray-300 rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              {/* Top section */}
              <div className="flex items-center justify-between mb-3">
                <img
                  className="border border-amber-200 rounded-full w-12"
                  src="/assets/products/writing_2327400 1.png"
                  alt={product.name}
                />
                <p
                  className={`px-4 py-1 rounded-full text-sm ${
                    product.tag === 'best seller'
                      ? 'bg-[#FEF3C6] text-[#BB4D00]'
                      : 'bg-purple-300 text-purple-900'
                  }`}
                >
                  {product.tag || 'New'}
                </p>
              </div>

              {/* Content */}
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-md text-gray-500 mb-2">
                {product.description}
              </p>
              <p className="text-xl font-semibold mb-3">
                ${product.price}
                <span className="text-md text-gray-500">
                  {' '}
                  / {product.period}
                </span>
              </p>

              {/* Features */}
              <div className="space-y-1 mb-5">
                {product.features.map((item, i) => (
                  <p key={i} className="flex items-center gap-2 text-[20px]">
                    <BsCheck2 className="text-green-500" />
                    {item}
                  </p>
                ))}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart}
                className={`btn text-white mt-2 py-6 px-10 rounded-full w-full ${
                  isInCart
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'
                }`}
              >
                {isInCart ? '✓ Added to Cart' : 'Buy Now'}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
