import React, { useState } from 'react';
import { User, ShoppingBag } from 'lucide-react';

interface LoginFormProps {
  onLogin: (userType: 'buyer' | 'seller', name: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(userType, name.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to ShoeMart</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">I am a:</label>
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className={`flex items-center px-4 py-2 rounded ${
                userType === 'buyer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setUserType('buyer')}
            >
              <ShoppingBag size={18} className="mr-2" />
              Buyer
            </button>
            <button
              type="button"
              className={`flex items-center px-4 py-2 rounded ${
                userType === 'seller' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setUserType('seller')}
            >
              <User size={18} className="mr-2" />
              Seller
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;