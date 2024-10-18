import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        <ShoppingBag className="inline-block w-8 h-8 text-blue-500 mr-2" />
        Your Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Go to Shop
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <ul className="bg-white rounded-lg shadow-md p-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
                <span className="text-lg font-semibold">{item.name}</span>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="ml-4 text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="text-center mt-6">
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
