import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
  setIsPolicyOpen: (open: boolean) => void;
  setIsOfferOpen: (open: boolean) => void;
}

const Footer = ({ scrollToSection, setIsPolicyOpen, setIsOfferOpen }: FooterProps) => {
  return (
    <footer className="bg-[#151C45] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/c86e981a-6e6e-4e01-9814-a4779f1ba4d6/bucket/141929ba-3c4f-458a-8513-7b0a190d8146.jpg" 
                alt="DeksKids" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Российский производитель школьной формы премиум-класса. Создаём одежду, в которой дети чувствуют себя уверенно.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-[#B89968] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="ВКонтакте"
              >
                <Icon name="Facebook" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-[#B89968] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <Icon name="Send" size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-[#B89968] rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-bold mb-4 text-[#B89968] text-lg">Каталог</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Классическая коллекция
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Праздничная коллекция
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Базовая коллекция
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Аксессуары
                </button>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold mb-4 text-[#B89968] text-lg">Информация</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  О бренде
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsPolicyOpen(true)}
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Политика конфиденциальности
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsOfferOpen(true)}
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Договор оферты
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Icon name="ChevronRight" size={14} />
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold mb-4 text-[#B89968] text-lg">Контакты</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={18} className="text-[#B89968] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:89025590005" className="hover:text-white transition-colors block">
                    8 902 559 00 05
                  </a>
                  <span className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={18} className="text-[#B89968] flex-shrink-0 mt-1" />
                <a href="mailto:info@dekskids.ru" className="hover:text-white transition-colors">
                  info@dekskids.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="text-[#B89968] flex-shrink-0 mt-1" />
                <span>Владивосток, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 DeksKids. Все права защищены.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Icon name="CreditCard" size={16} />
                Оплата картой
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Truck" size={16} />
                Доставка по РФ
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                Гарантия качества
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;