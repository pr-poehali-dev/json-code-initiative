import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  scrollToSection: (id: string) => void;
  setIsPolicyOpen: (open: boolean) => void;
}

const MainContent = ({ scrollToSection, setIsPolicyOpen }: MainContentProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDressesModalOpen, setIsDressesModalOpen] = useState(false);
  const [dressImageIndex, setDressImageIndex] = useState<{[key: number]: number}>({});
  const [fullscreenImage, setFullscreenImage] = useState<{images: string[], currentIndex: number} | null>(null);

  const slides = [
    {
      image: 'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/b40625ba-c6b1-41a0-80a8-2796b408a914.jpg',
      title: 'Школьная форма премиум-класса',
      subtitle: 'Новая коллекция 2026',
      description: 'Элегантность и комфорт в каждой детали'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/e04fdee5-4648-444a-ab80-d816f971b31e.jpg',
      title: 'Школьные платья',
      subtitle: 'Элегантность и стиль',
      description: 'Классические платья с белым воротником'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/7010eaf1-0027-44c9-977d-b9fa095221b3.jpg',
      title: 'Школьные фартуки',
      subtitle: 'Для особых случаев',
      description: 'Традиционные фартуки для праздников'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/b40625ba-c6b1-41a0-80a8-2796b408a914.jpg',
      title: 'Школьные сарафаны',
      subtitle: 'Универсальная классика',
      description: 'Практичные и стильные сарафаны для школы'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/c1e2347d-1b7e-4269-9be8-824e7cafa00d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Slider */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 bg-[#151C45]/60 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-2xl mx-auto text-center">
                    <p className="text-[#B89968] text-sm md:text-base font-medium mb-2 uppercase tracking-wider animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight animate-slide-in-up">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                      {slide.description}
                    </p>
                    <Button
                      onClick={() => scrollToSection('collections')}
                      className="bg-[#B89968] hover:bg-[#a08759] text-white px-8 py-6 text-lg rounded-none transition-all hover:scale-105 animate-scale-in"
                      style={{animationDelay: '0.3s'}}
                    >
                      Смотреть коллекцию
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all group"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" size={24} className="text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all group"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" size={24} className="text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-[#B89968] w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#151C45] mb-4">Наша коллекция</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/6be724fc-1d14-41ea-912f-259971670945.jpg',
                'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/92d0fe13-3536-4974-b8ef-99f6b6d9efaf.jpg',
                'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/a6079f9e-1936-4a82-85cb-c8d25f8b0db8.jpg',
                'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/21a5185b-8d63-4c66-9e73-6e3f9ac8ae90.jpg',
                'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/77e76592-9d3b-4cc4-8708-30ecdc45dcae.jpg'
              ].map((image, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden aspect-[3/4] bg-gray-100 cursor-pointer animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <img
                    src={image}
                    alt={`Школьная форма ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#151C45]/0 group-hover:bg-[#151C45]/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Award', title: 'Премиум качество', desc: 'Только натуральные ткани' },
              { icon: 'Truck', title: 'Доставка по России', desc: 'От 1 дня' },
              { icon: 'Shield', title: 'Гарантия качества', desc: '1 год на все изделия' },
              { icon: 'Percent', title: 'Выгодные цены', desc: 'Прямой производитель' }
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B89968] transition-colors">
                  <Icon name={item.icon as any} size={28} className="text-[#151C45] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#151C45] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#151C45] mb-4">О бренде DeksKids</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Российский производитель школьной формы премиум-класса. Создаём одежду, в которой дети чувствуют себя уверенно и комфортно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: 'Sparkles', 
                title: 'Золотой стандарт', 
                desc: 'Символ успеха и уверенности. Золотые акценты подчёркивают премиальность каждого изделия.' 
              },
              { 
                icon: 'Shield', 
                title: 'Традиции качества', 
                desc: 'Navy-blue — цвет надёжности и профессионализма. Классика, проверенная временем.' 
              },
              { 
                icon: 'Heart', 
                title: 'Забота о детях', 
                desc: 'Натуральные ткани, безопасные материалы и продуманный крой для максимального комфорта.' 
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all group animate-scale-in" style={{animationDelay: `${i * 0.15}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#B89968] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#151C45] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#151C45] mb-4">Наши коллекции</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Широкий ассортимент школьной формы для любых случаев — от повседневных занятий до торжественных мероприятий
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { 
                title: 'Школьные платья', 
                desc: 'Строгие силуэты и традиционный крой', 
                price: 'от 4 500 ₽',
                icon: 'Star'
              },
              { 
                title: 'Школьные фартуки', 
                desc: 'Классические белые и черные фартуки', 
                price: 'от 2 500 ₽',
                icon: 'Sparkles'
              },
              { 
                title: 'Базовая коллекция', 
                desc: 'Универсальные модели на каждый день', 
                price: 'от 3 500 ₽',
                icon: 'Package'
              },
              { 
                title: 'Спортивная коллекция', 
                desc: 'Удобная форма для физкультуры', 
                price: 'от 3 000 ₽',
                icon: 'Zap'
              },
              { 
                title: 'Зимняя коллекция', 
                desc: 'Тёплые жилеты и кардиганы', 
                price: 'от 7 000 ₽',
                icon: 'CloudSnow'
              },
              { 
                title: 'Аксессуары', 
                desc: 'Галстуки, банты и другие элементы', 
                price: 'от 500 ₽',
                icon: 'Gift'
              }
            ].map((item, i) => (
              <Card 
                key={i} 
                className="border-none shadow-md hover:shadow-2xl transition-all group cursor-pointer overflow-hidden animate-fade-in"
                style={{animationDelay: `${i * 0.1}s`}}
                onClick={() => {
                  if (item.title === 'Школьные платья') {
                    setIsDressesModalOpen(true);
                  }
                }}
              >
                <div className="h-72 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#B89968] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  {item.title === 'Школьные платья' ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/e04fdee5-4648-444a-ab80-d816f971b31e.jpg" 
                        alt="Школьное платье"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name={item.icon as any} size={80} className="text-[#B89968] opacity-30 group-hover:opacity-50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-[#B89968] text-white px-3 py-1 text-sm font-medium">
                    NEW
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#151C45] mb-2 group-hover:text-[#B89968] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#B89968] font-bold text-xl">{item.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-[#151C45] hover:bg-[#B89968] text-white transition-colors"
                      onClick={() => {
                        if (item.title === 'Школьные платья') {
                          setIsDressesModalOpen(true);
                        } else {
                          scrollToSection('contact');
                        }
                      }}
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#151C45] to-[#2a3570] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#B89968] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B89968] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '15+', label: 'Лет на рынке', icon: 'Calendar' },
              { number: '50k+', label: 'Довольных клиентов', icon: 'Users' },
              { number: '200+', label: 'Моделей в каталоге', icon: 'Package' },
              { number: '100%', label: 'Гарантия качества', icon: 'BadgeCheck' }
            ].map((item, i) => (
              <div key={i} className="text-center animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-16 h-16 bg-[#B89968] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#B89968] mb-2">{item.number}</div>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#151C45] mb-4">Свяжитесь с нами</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#151C45] mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Введите ваше имя"
                    className="h-12 border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#151C45] mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="h-12 border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#151C45] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="h-12 border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#151C45] mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, что вас интересует..."
                    rows={4}
                    className="border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B89968] hover:bg-[#a08759] text-white h-12 text-lg transition-all hover:scale-105"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-green-800 text-sm">
                      Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <Icon name="XCircle" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 text-sm">
                      Произошла ошибка. Попробуйте позже или позвоните нам напрямую.
                    </p>
                  </div>
                )}

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <button
                      type="button"
                      onClick={() => setIsPolicyOpen(true)}
                      className="text-[#B89968] hover:underline"
                    >
                      политикой конфиденциальности
                    </button>
                  </p>
                  <div className="flex items-center justify-center gap-6 text-[#151C45]">
                    <a href="tel:+74950000000" className="flex items-center gap-2 hover:text-[#B89968] transition-colors">
                      <Icon name="Phone" size={18} />
                      <span className="font-medium">+7 (495) 000-00-00</span>
                    </a>
                    <a href="mailto:info@dekskids.ru" className="flex items-center gap-2 hover:text-[#B89968] transition-colors">
                      <Icon name="Mail" size={18} />
                      <span className="font-medium">info@dekskids.ru</span>
                    </a>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dresses Modal */}
      {isDressesModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsDressesModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-3xl font-bold text-[#151C45]">Школьные платья</h2>
                <p className="text-gray-600 mt-1">Классические модели с белым воротником</p>
              </div>
              <button 
                onClick={() => setIsDressesModalOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              >
                <Icon name="X" size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    images: [
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/e04fdee5-4648-444a-ab80-d816f971b31e.jpg',
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/0dd0b520-7516-4feb-b5e5-e17cc356b429.jpg',
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/28654bae-75f3-489c-9841-da7decbe7c1b.jpg',
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/ee39a783-de3a-418e-9546-865ff48208e1.jpg',
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/94744555-e50d-47a5-8eaf-09d90985f7f9.jpg',
                      'https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/1048c325-cdaa-4720-806a-c6f6bd0a31ea.jpg'
                    ],
                    title: 'Платье классическое с белым воротником и рюшами',
                    sizes: '122-170',
                    price: '4 500 ₽',
                    description: 'Элегантное черное платье с белым кружевным воротником и рюшами на рукавах. Идеально для школы и праздников.'
                  }
                ].map((dress, index) => {
                  const currentImageIndex = dressImageIndex[index] || 0;
                  
                  return (
                  <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all">
                    <div 
                      className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
                      onClick={() => setFullscreenImage({ images: dress.images, currentIndex: currentImageIndex })}
                    >
                      <img 
                        src={dress.images[currentImageIndex]} 
                        alt={dress.title}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                      <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Maximize2" size={16} className="text-[#151C45]" />
                      </div>
                      
                      {dress.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDressImageIndex(prev => ({
                                ...prev,
                                [index]: (currentImageIndex - 1 + dress.images.length) % dress.images.length
                              }));
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Icon name="ChevronLeft" size={20} className="text-[#151C45]" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDressImageIndex(prev => ({
                                ...prev,
                                [index]: (currentImageIndex + 1) % dress.images.length
                              }));
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                          >
                            <Icon name="ChevronRight" size={20} className="text-[#151C45]" />
                          </button>
                          
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {dress.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDressImageIndex(prev => ({ ...prev, [index]: imgIdx }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  imgIdx === currentImageIndex 
                                    ? 'bg-[#B89968] w-6' 
                                    : 'bg-white/70 hover:bg-white'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-[#151C45] mb-2 line-clamp-2">{dress.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dress.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">Размеры: {dress.sizes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#B89968]">{dress.price}</span>
                        <Button 
                          size="sm"
                          className="bg-[#151C45] hover:bg-[#B89968] text-white"
                          onClick={() => {
                            setIsDressesModalOpen(false);
                            scrollToSection('contact');
                          }}
                        >
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          <button 
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={fullscreenImage.images[fullscreenImage.currentIndex]} 
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {fullscreenImage.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(prev => prev ? {
                      ...prev,
                      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
                    } : null);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronLeft" size={28} className="text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullscreenImage(prev => prev ? {
                      ...prev,
                      currentIndex: (prev.currentIndex + 1) % prev.images.length
                    } : null);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronRight" size={28} className="text-white" />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {fullscreenImage.images.map((_, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullscreenImage(prev => prev ? { ...prev, currentIndex: imgIdx } : null);
                      }}
                      className={`transition-all ${
                        imgIdx === fullscreenImage.currentIndex 
                          ? 'w-8 h-2 bg-[#B89968]' 
                          : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                      } rounded-full`}
                    />
                  ))}
                </div>

                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
                  {fullscreenImage.currentIndex + 1} / {fullscreenImage.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;