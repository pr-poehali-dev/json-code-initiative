import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [showCatalog, setShowCatalog] = useState(false);

  const collections = [
    { name: 'Классическая', id: 'collections' },
    { name: 'Праздничная', id: 'collections' },
    { name: 'Базовая', id: 'collections' },
    { name: 'Спортивная', id: 'collections' },
    { name: 'Зимняя', id: 'collections' },
    { name: 'Аксессуары', id: 'collections' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info@dekskids.ru" className="flex items-center gap-2 text-gray-600 hover:text-[#B89968] transition-colors">
                <Icon name="Mail" size={14} />
                <span className="hidden sm:inline">info@dekskids.ru</span>
              </a>
              <span className="text-gray-400 hidden md:inline">Пн-Пт: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:89025590005" className="flex items-center gap-2 text-[#B89968] font-medium hover:text-[#151C45] transition-colors">
                <Icon name="Phone" size={14} />
                <span>8 902 559 00 05</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-[#151C45] rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-[#B89968]" />
            </div>
            <div className="text-2xl font-bold tracking-wide">
              <span className="text-[#151C45]">Deks</span>
              <span className="text-[#B89968]">Kids</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div 
              className="relative"
              onMouseEnter={() => setShowCatalog(true)}
              onMouseLeave={() => setShowCatalog(false)}
            >
              <button className="px-4 py-2 text-[#151C45] hover:text-[#B89968] transition-colors font-medium flex items-center gap-2">
                Каталог
                <Icon name="ChevronDown" size={16} className={`transition-transform ${showCatalog ? 'rotate-180' : ''}`} />
              </button>
              
              {showCatalog && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden animate-fade-in">
                  {collections.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        scrollToSection(item.id);
                        setShowCatalog(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-[#F5F5F5] hover:text-[#B89968] transition-colors text-[#151C45] border-b border-gray-100 last:border-b-0"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('about')} 
              className="px-4 py-2 text-[#151C45] hover:text-[#B89968] transition-colors font-medium"
            >
              О бренде
            </button>
            <button 
              onClick={() => scrollToSection('collections')} 
              className="px-4 py-2 text-[#151C45] hover:text-[#B89968] transition-colors font-medium"
            >
              Коллекции
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 py-2 text-[#151C45] hover:text-[#B89968] transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#B89968] hover:bg-[#a08759] text-white px-6 py-2 rounded-none transition-all"
            >
              Оставить заявку
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-[#151C45] p-2">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-200 w-full sm:w-96">
              <div className="flex flex-col gap-6 mt-8">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-[#151C45] mb-4">Каталог</h3>
                  <div className="space-y-2">
                    {collections.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-600 hover:text-[#B89968] hover:bg-[#F5F5F5] rounded transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  <button 
                    onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                    className="text-left px-4 py-3 text-[#151C45] hover:text-[#B89968] hover:bg-[#F5F5F5] rounded transition-colors font-medium"
                  >
                    О бренде
                  </button>
                  <button 
                    onClick={() => { scrollToSection('collections'); setIsMenuOpen(false); }} 
                    className="text-left px-4 py-3 text-[#151C45] hover:text-[#B89968] hover:bg-[#F5F5F5] rounded transition-colors font-medium"
                  >
                    Коллекции
                  </button>
                  <button 
                    onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
                    className="text-left px-4 py-3 text-[#151C45] hover:text-[#B89968] hover:bg-[#F5F5F5] rounded transition-colors font-medium"
                  >
                    Контакты
                  </button>
                </nav>

                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <a 
                    href="tel:89025590005" 
                    className="flex items-center gap-3 text-[#B89968] hover:text-[#151C45] transition-colors"
                  >
                    <Icon name="Phone" size={20} />
                    <span className="font-medium">8 902 559 00 05</span>
                  </a>
                  <a 
                    href="mailto:info@dekskids.ru" 
                    className="flex items-center gap-3 text-gray-600 hover:text-[#B89968] transition-colors"
                  >
                    <Icon name="Mail" size={20} />
                    <span>info@dekskids.ru</span>
                  </a>
                  <Button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#B89968] hover:bg-[#a08759] text-white py-3 rounded-none mt-4"
                  >
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
