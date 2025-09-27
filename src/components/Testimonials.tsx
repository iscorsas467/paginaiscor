"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; import "swiper/css/navigation"; import "swiper/css/pagination";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs md:text-sm mb-4">
          Testimonios
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          Lo que dicen nuestros clientes
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Conoce las experiencias de empresas que han transformado su cultura de seguridad con nuestros servicios especializados
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="!pb-12"
        >
          {items.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="mx-auto max-w-4xl">
                <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Gradiente sutil de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
                  
                  <div className="relative px-8 md:px-12 py-10 md:py-12">
                    {/* Estrellas con mejor diseño */}
                    <div className="flex justify-center gap-1 mb-6" aria-label="Calificación 5 estrellas">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current drop-shadow-sm" />
                      ))}
                    </div>
                    
                    {/* Quote con mejor tipografía */}
                    <blockquote className="text-center">
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic mb-8 max-w-3xl mx-auto">
                        "{t.quote}"
                      </p>
                    </blockquote>
                    
                    {/* Información del cliente con mejor diseño */}
                    <div className="text-center">
                      <div className="inline-flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-sm border border-gray-100">
                        {/* Avatar placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {t.name.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-lg mb-1">{t.name}</div>
                          <div className="text-sm text-gray-600 font-medium mb-1">{t.role}</div>
                          <div className="text-sm text-blue-600 font-semibold">{t.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Estilos de navegación más elegantes */}
        <style jsx global>{`
          .swiper-button-next, .swiper-button-prev {
            width: 48px; height: 48px;
            background: white; 
            border-radius: 50%;
            box-shadow: 0 10px 30px rgba(0,0,0,.1);
            color: #374151;
            border: 1px solid rgba(0,0,0,.05);
            transition: all 0.3s ease;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 40px rgba(0,0,0,.15);
          }
          .swiper-button-next:after, .swiper-button-prev:after { 
            font-size: 18px; 
            font-weight: bold;
          }
          .swiper-pagination-bullet { 
            width: 8px; 
            height: 8px; 
            background: #D1D5DB;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active { 
            background: #0B66FF; 
            transform: scale(1.2);
          }
          .swiper-pagination {
            bottom: 0 !important;
          }
        `}</style>
      </div>
    </div>
  );
}
