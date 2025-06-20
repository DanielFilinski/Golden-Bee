
import React from 'react';
import { Heart, Shield, Leaf, Award } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Для здоровья',
      description: 'Натуральные продукты пчеловодства содержат витамины, минералы и антиоксиданты, необходимые для поддержания здоровья'
    },
    {
      icon: Shield,
      title: 'Повышение иммунитета',
      description: 'Прополис и мед обладают противовирусными и антибактериальными свойствами, укрепляя естественный иммунитет'
    },
    {
      icon: Leaf,
      title: '100% натуральное',
      description: 'Наши продукты не содержат искусственных добавок, консервантов или химических веществ'
    },
    {
      icon: Award,
      title: 'Высшее качество',
      description: 'Каждая банка проходит строгий контроль качества. Мы гарантируем свежесть и натуральность всех продуктов'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Преимущества натуральных продуктов пчеловодства от нашей семейной пасеки
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              {/* Icon */}
              <div className="relative mx-auto w-20 h-20 mb-6">
                <div className="absolute inset-0 bg-amber-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="w-8 h-8 text-amber-600" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">0</div>
              <div className="text-gray-600">химических добавок</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">24ч</div>
              <div className="text-gray-600">свежесть гарантирована</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">∞</div>
              <div className="text-gray-600">польза для здоровья</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
