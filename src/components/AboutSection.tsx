
import React from 'react';
import { Users, MapPin, Clock } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нашей пасеке
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Наша семейная пасека существует уже более 15 лет. Мы занимаемся пчеловодством 
              с большой любовью и заботой о природе, следуя традициям, передаваемым из поколения в поколение.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Экологически чистая зона</h3>
                  <p className="text-gray-600">Наша пасека расположена вдали от промышленных объектов, в окружении цветущих лугов и лесов</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Семейные традиции</h3>
                  <p className="text-gray-600">Секреты пчеловодства передаются в нашей семье из поколения в поколение</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Свежесть продуктов</h3>
                  <p className="text-gray-600">Мед качается только в сезон, сразу разливается по банкам и отправляется к покупателям</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=600" 
                alt="Пчелы на пасеке"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
              <div className="text-gray-600">ульев на пасеке</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
