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
  return (
    <>
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#151C45] via-[#1e2655] to-[#2a3570] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#B89968] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B89968] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Школьная форма для девочек<br className="hidden sm:block" />
              <span className="text-[#B89968]"> премиум-класса</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 font-light px-4">
              Где комфорт встречается с уверенностью
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
              <Button 
                onClick={() => scrollToSection('collections')}
                className="bg-[#B89968] hover:bg-[#a08759] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg transition-all hover:scale-105 w-full sm:w-auto"
              >
                Смотреть коллекции
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-[#B89968] text-[#B89968] hover:bg-[#B89968] hover:text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg transition-all w-full sm:w-auto"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F5F5F5] to-transparent"></div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151C45] mb-4">О бренде DeksKids</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89968] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151C45] mb-3">Золотой акцент</h3>
                <p className="text-gray-600">
                  Символ уверенности, успеха и яркого будущего наших детей
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#151C45] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" size={32} className="text-[#B89968]" />
                </div>
                <h3 className="text-xl font-bold text-[#151C45] mb-3">Традиции и надёжность</h3>
                <p className="text-gray-600">
                  Navy цвет символизирует стабильность, дисциплину и профессионализм
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#B89968] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151C45] mb-3">Премиальное качество</h3>
                <p className="text-gray-600">
                  Натуральные ткани, безупречный пошив и внимание к каждой детали
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="collections" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151C45] mb-4">Наши коллекции</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Премиальная школьная форма, созданная для комфорта и уверенности
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Классическая коллекция', desc: 'Традиционные силуэты с современным кроем', price: 'от 4 500 ₽' },
              { title: 'Праздничная коллекция', desc: 'Элегантные модели для особых случаев', price: 'от 6 500 ₽' },
              { title: 'Базовая коллекция', desc: 'Универсальные решения на каждый день', price: 'от 3 500 ₽' },
              { title: 'Спортивная коллекция', desc: 'Удобная форма для активных занятий', price: 'от 3 000 ₽' },
              { title: 'Зимняя коллекция', desc: 'Утепленные модели для холодного сезона', price: 'от 7 000 ₽' },
              { title: 'Аксессуары', desc: 'Дополняющие элементы образа', price: 'от 500 ₽' }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-2xl transition-all group cursor-pointer overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-[#151C45] to-[#2a3570] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#B89968] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Star" size={64} className="text-[#B89968] opacity-30 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#151C45] mb-2 group-hover:text-[#B89968] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#B89968] font-bold text-lg">{item.price}</span>
                    <Button className="bg-[#151C45] hover:bg-[#B89968] text-white transition-all group-hover:scale-105">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151C45] mb-4">Награды и достижения</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Trophy', text: 'Лучший производитель 2024' },
              { icon: 'Star', text: 'Премия за качество' },
              { icon: 'Heart', text: 'Выбор родителей' },
              { icon: 'Medal', text: 'Экологичный бренд' }
            ].map((award, i) => (
              <div key={i} className="text-center p-4 sm:p-6 bg-[#F5F5F5] rounded-lg hover:bg-[#151C45] hover:text-white transition-all group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-[#B89968] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={award.icon as any} size={32} className="text-white sm:hidden" />
                  <Icon name={award.icon as any} size={40} className="text-white hidden sm:block" />
                </div>
                <p className="font-semibold text-sm sm:text-lg">{award.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#151C45] to-[#2a3570] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Для образовательных учреждений</h2>
          <div className="w-24 h-1 bg-[#B89968] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200 px-4">
            Предлагаем специальные условия для школ и гимназий
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Icon name="Percent" size={40} className="text-[#B89968] mx-auto mb-3 sm:mb-4 sm:hidden" />
              <Icon name="Percent" size={48} className="text-[#B89968] mx-auto mb-3 sm:mb-4 hidden sm:block" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Скидки для школ</h3>
              <p className="text-sm sm:text-base text-gray-200">До 30% на оптовые заказы</p>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Icon name="Palette" size={40} className="text-[#B89968] mx-auto mb-3 sm:mb-4 sm:hidden" />
              <Icon name="Palette" size={48} className="text-[#B89968] mx-auto mb-3 sm:mb-4 hidden sm:block" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Индивидуальный дизайн</h3>
              <p className="text-sm sm:text-base text-gray-200">Адаптация под фирменный стиль</p>
            </div>
            <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-lg sm:col-span-2 md:col-span-1">
              <Icon name="Truck" size={40} className="text-[#B89968] mx-auto mb-3 sm:mb-4 sm:hidden" />
              <Icon name="Truck" size={48} className="text-[#B89968] mx-auto mb-3 sm:mb-4 hidden sm:block" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Бесплатная доставка</h3>
              <p className="text-sm sm:text-base text-gray-200">При заказе от 50 комплектов</p>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#B89968] hover:bg-[#a08759] text-white px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-lg transition-all hover:scale-105 w-full sm:w-auto max-w-xs mx-auto"
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151C45] mb-4">Свяжитесь с нами</h2>
            <div className="w-24 h-1 bg-[#B89968] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#151C45] mb-4 sm:mb-6">Контактная информация</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#151C45]">Телефон</p>
                    <a href="tel:89025590005" className="text-[#B89968] hover:underline">8 902 559 00 05</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#151C45]">Email</p>
                    <a href="mailto:info@декскидс.рф" className="text-[#B89968] hover:underline">info@декскидс.рф</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#151C45]">Адрес</p>
                    <p className="text-gray-600">Владивосток, Приморский край</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#151C45]">Часы работы</p>
                    <p className="text-gray-600">Пн-Пт: 10:00-20:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#151C45] mb-4 sm:mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={5}
                      className="border-gray-300 focus:border-[#B89968] focus:ring-[#B89968]"
                    />
                  </div>
                  <div className="flex items-start gap-2 mb-4">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Я согласен на{' '}
                      <button
                        type="button"
                        onClick={() => setIsPolicyOpen(true)}
                        className="text-[#B89968] hover:underline font-medium"
                      >
                        обработку персональных данных
                      </button>
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#B89968] hover:bg-[#a08759] text-white py-5 sm:py-6 text-base sm:text-lg transition-all hover:scale-105"
                  >
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
