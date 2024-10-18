import React from 'react';
import { ShoppingBag, Tag, Truck, CreditCard, Star } from 'lucide-react';

interface HomePageProps {
  userType: 'buyer' | 'seller' | null;
  addToCart: (product: { id: number; name: string; price: number }) => void; // Accept addToCart function
}

const products = [
  { id: 1, name: "Classic Leather Sneakers", price: 89.99, rating: 4.5, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Running Performance Shoes", price: 129.99, rating: 4.8, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Casual Canvas Slip-ons", price: 59.99, rating: 4.2, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Elegant Dress Shoes", price: 149.99, rating: 4.7, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Comfortable Hiking Boots", price: 119.99, rating: 4.6, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Stylish High Heels", price: 99.99, rating: 4.4, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" },
];

const HomePage: React.FC<HomePageProps> = ({ userType, addToCart }) => {
  return (
    <div className="space-y-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShoeMart</h1>
        <p className="text-xl text-gray-600">Your one-stop destination for all things shoes!</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" 
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">For Buyers</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><ShoppingBag className="mr-2 text-blue-500" /> Browse a wide selection of shoes</li>
            <li className="flex items-center"><Tag className="mr-2 text-blue-500" /> Request custom shoes</li>
            <li className="flex items-center"><Truck className="mr-2 text-blue-500" /> Fast and reliable shipping</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">For Sellers</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><Tag className="mr-2 text-green-500" /> List your shoes for sale</li>
            <li className="flex items-center"><CreditCard className="mr-2 text-green-500" /> Secure payments</li>
            <li className="flex items-center"><Truck className="mr-2 text-green-500" /> Manage your inventory</li>
          </ul>
        </div>
      </section>

      <section className="bg-blue-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose ShoeMart?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <ShoppingBag size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Find the perfect pair from our vast collection of shoes.</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Tag size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Competitive Prices</h3>
            <p>Get the best deals on high-quality footwear.</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <Truck size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p>Enjoy quick and reliable delivery to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
