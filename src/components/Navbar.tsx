
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-poppins font-bold text-xl text-cloud-dark">
              Motlalepula<span className="text-accent">.</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/about" label="About" />
              <NavLink to="/experience" label="Experience" />
              <NavLink to="/education" label="Education" />
              <Button asChild variant="default" className="bg-cloud hover:bg-cloud-dark">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} animate-fade-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 shadow-md">
          <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/about" label="About" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/experience" label="Experience" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/education" label="Education" onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

// Desktop nav link
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:text-cloud-dark font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-cloud-dark after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {label}
  </Link>
);

// Mobile nav link
const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link 
    to={to} 
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-cloud-dark hover:bg-gray-50"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
