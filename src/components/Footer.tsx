
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-amber-400 mb-4">🐝 Золотая Пасека</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Семейная пасека с 15-летним опытом производства натуральных продуктов пчеловодства. 
              Мы заботимся о качестве и следуем традициям наших предков.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-300 hover:text-amber-400 transition-colors">Продукты</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-amber-400 transition-colors">Преимущества</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">О нас</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Контакты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Гарантии качества</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">info@goldenhoney.ru</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span className="text-gray-300">Московская область,<br />д. Медовка</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Золотая Пасека. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
