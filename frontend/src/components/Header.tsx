import React from 'react';
import { ShoppingBag, User, LogOut } from 'lucide-react';

interface HeaderProps {
  user: { type: 'buyer' | 'seller' | null; name: string | null };
  cart: { id: number; name: string; price: number }[];
  onLogout: () => void;
  onNavigate: (page: 'home' | 'dashboard' | 'contact' | 'cart') => void;
}

const Header: React.FC<HeaderProps> = ({ user, cart, onLogout, onNavigate }) => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <ShoppingBag size={24} />
          <h1 className="text-2xl font-bold">ShoeMart</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><button onClick={() => onNavigate('home')} className="hover:text-gray-200">Home</button></li>
            <li><button onClick={() => onNavigate('dashboard')} className="hover:text-gray-200">Dashboard</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-gray-200">Contact</button></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={() => onNavigate('cart')}>
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
          {user.type ? (
            <>
              <span className="flex items-center">
                <User size={18} className="mr-2" />
                {user.name} ({user.type})
              </span>
              <button className="flex items-center text-white hover:text-gray-200" onClick={onLogout}>
                <LogOut size={18} className="mr-1" />
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => onNavigate('dashboard')} className="flex items-center text-white hover:text-gray-200">
              <User size={18} className="mr-1" />
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
