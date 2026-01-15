interface FooterProps {
  scrollToSection: (id: string) => void;
  setIsPolicyOpen: (open: boolean) => void;
  setIsOfferOpen: (open: boolean) => void;
}

const Footer = ({ scrollToSection, setIsPolicyOpen, setIsOfferOpen }: FooterProps) => {
  return (
    <footer className="bg-[#151C45] text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Deks</span>
              <span className="text-[#B89968]">Kids</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Школьная форма премиум-класса для девочек
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#B89968] text-sm sm:text-base">Навигация</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О бренде</button></li>
              <li><button onClick={() => scrollToSection('collections')} className="hover:text-white transition-colors">Коллекции</button></li>
              <li><button onClick={() => scrollToSection('awards')} className="hover:text-white transition-colors">Награды</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#B89968] text-sm sm:text-base">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>8 902 559 00 05</li>
              <li>info@декскидс.рф</li>
              <li>Владивосток</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-[#B89968] text-sm sm:text-base">Режим работы</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Пн-Пт: 10:00-20:00</li>
              <li>Сб-Вс: 10:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-400 mb-4">
            <button 
              onClick={() => setIsPolicyOpen(true)}
              className="hover:text-[#B89968] transition-colors underline"
            >
              Политика конфиденциальности
            </button>
            <button 
              onClick={() => setIsOfferOpen(true)}
              className="hover:text-[#B89968] transition-colors underline"
            >
              Договор оферты
            </button>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 DeksKids. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
