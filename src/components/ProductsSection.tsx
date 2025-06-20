
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

export const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Липовый мед',
      price: '800 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Нежный липовый мед с цветочным ароматом',
      weight: '500г'
    },
    {
      id: 2,
      name: 'Гречишный мед',
      price: '900 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Темный мед с насыщенным вкусом',
      weight: '500г'
    },
    {
      id: 3,
      name: 'Цветочный мед',
      price: '750 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Разнотравный мед с богатым букетом',
      weight: '500г'
    },
    {
      id: 4,
      name: 'Прополис',
      price: '1200 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Натуральный прополис для здоровья',
      weight: '20г'
    },
    {
      id: 5,
      name: 'Пчелиный воск',
      price: '600 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Чистый пчелиный воск высшего качества',
      weight: '100г'
    },
    {
      id: 6,
      name: 'Медовые соты',
      price: '1500 ₽',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      rating: 5,
      description: 'Свежие медовые соты в естественном виде',
      weight: '300г'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши продукты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий ассортимент натуральных продуктов пчеловодства высшего качества
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-amber-600">{product.weight}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2 group">
                    <ShoppingCart className="w-4 h-4" />
                    <span>В корзину</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-100 text-amber-700 px-8 py-3 rounded-xl font-semibold hover:bg-amber-200 transition-colors">
            Посмотреть весь каталог
          </button>
        </div>
      </div>
    </section>
  );
};
