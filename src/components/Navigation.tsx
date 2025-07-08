import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import wellvestLogo from '@/assets/wellvest-logo.jpeg';
import { useWaitlist } from '@/contexts/WaitlistContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openWaitlistModal } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'LEGAL', path: '/legal' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={wellvestLogo} 
              alt="WellVest Pvt.Ltd" 
              className="h-16 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-text-dark">WellVest</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 py-2 px-3 font-medium text-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-brand'
                      : 'text-text-dark hover:text-orange-brand'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </div>

          {/* My Portfolio Button */}
          <div className="hidden lg:block">
            <Button variant="wellvest" onClick={openWaitlistModal}>
              My Portfolio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-dark hover:text-orange-brand"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-brand bg-orange-brand/10'
                      : 'text-text-dark hover:text-orange-brand hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  variant="wellvest" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openWaitlistModal();
                  }}
                >
                  My Portfolio
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;