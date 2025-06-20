
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-amber-600">🐝 Золотая Пасека</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Продукты</a>
            <a href="#benefits" className="text-gray-700 hover:text-amber-600 transition-colors">Преимущества</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Контакты</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors">
              <Phone size={20} />
              <span>+7 (999) 123-45-67</span>
            </button>
            <button className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
              <ShoppingCart size={20} />
              <span>Корзина</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Продукты</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Преимущества</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">О нас</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors">Контакты</a>
              <div className="pt-4 border-t">
                <button className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  <ShoppingCart size={20} />
                  <span>Корзина</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
