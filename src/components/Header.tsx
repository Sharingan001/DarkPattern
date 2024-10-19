import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <ShieldAlert size={32} className="text-yellow-400 mr-2" />
        <h1 className="text-3xl font-bold">Dark Pattern Detector</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition-colors">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;