import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-[#151C45] text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold tracking-wide">
          <span className="text-white">Deks</span>
          <span className="text-[#B89968]">Kids</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#B89968] transition-colors">
            О бренде
          </button>
          <button onClick={() => scrollToSection('collections')} className="hover:text-[#B89968] transition-colors">
            Коллекции
          </button>
          <button onClick={() => scrollToSection('awards')} className="hover:text-[#B89968] transition-colors">
            Награды
          </button>
          <button onClick={() => scrollToSection('schools')} className="hover:text-[#B89968] transition-colors">
            Для школ
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#B89968] transition-colors">
            Контакты
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:89025590005" className="hidden sm:flex items-center gap-2 text-[#B89968] hover:text-white transition-colors">
            <Icon name="Phone" size={18} />
            <span className="font-medium hidden lg:inline">8 902 559 00 05</span>
          </a>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-white p-2">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#151C45] text-white border-l border-[#B89968]">
              <nav className="flex flex-col gap-6 mt-8">
                <button 
                  onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} 
                  className="text-left text-lg hover:text-[#B89968] transition-colors py-2"
                >
                  О бренде
                </button>
                <button 
                  onClick={() => { scrollToSection('collections'); setIsMenuOpen(false); }} 
                  className="text-left text-lg hover:text-[#B89968] transition-colors py-2"
                >
                  Коллекции
                </button>
                <button 
                  onClick={() => { scrollToSection('awards'); setIsMenuOpen(false); }} 
                  className="text-left text-lg hover:text-[#B89968] transition-colors py-2"
                >
                  Награды
                </button>
                <button 
                  onClick={() => { scrollToSection('schools'); setIsMenuOpen(false); }} 
                  className="text-left text-lg hover:text-[#B89968] transition-colors py-2"
                >
                  Для школ
                </button>
                <button 
                  onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} 
                  className="text-left text-lg hover:text-[#B89968] transition-colors py-2"
                >
                  Контакты
                </button>
                <a 
                  href="tel:89025590005" 
                  className="flex items-center gap-3 text-lg text-[#B89968] hover:text-white transition-colors py-2 mt-4 border-t border-[#B89968] pt-6"
                >
                  <Icon name="Phone" size={20} />
                  <span>8 902 559 00 05</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
