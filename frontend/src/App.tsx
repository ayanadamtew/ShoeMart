import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import BuyerDashboard from './components/BuyerDashboard';
import SellerDashboard from './components/SellerDashboard';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import CartPage from './components/CartPage'; // Import CartPage

function App() {
  const [user, setUser] = useState<{ type: 'buyer' | 'seller' | null; name: string | null }>({ type: null, name: null });
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'contact' | 'cart'>('home');
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  const handleLogin = (userType: 'buyer' | 'seller', name: string) => {
    setUser({ type: userType, name });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser({ type: null, name: null });
    setCurrentPage('home');
  };

  const handleNavigate = (page: 'home' | 'dashboard' | 'contact' | 'cart') => {
    setCurrentPage(page);
  };

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header user={user} cart={cart} onLogout={handleLogout} onNavigate={handleNavigate} removeFromCart={removeFromCart} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage userType={user.type} addToCart={addToCart} />}
        {currentPage === 'dashboard' && !user.type && <LoginForm onLogin={handleLogin} />}
        {currentPage === 'dashboard' && user.type === 'buyer' && <BuyerDashboard />}
        {currentPage === 'dashboard' && user.type === 'seller' && <SellerDashboard />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'cart' && <CartPage cart={cart} removeFromCart={removeFromCart} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
