
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Motlalepula Mbali Kgatlhane</h3>
            <p className="text-gray-600 mb-4">Cloud Associate at Capaciti with a passion for full stack development and cloud technologies.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Mbalsss" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cloud-dark" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/motlalepula-mbali-kgatlhane-67989921b" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cloud-dark" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Mbalikgatlhane34@gmail.com" className="text-gray-500 hover:text-cloud-dark" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cloud-dark">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-cloud-dark">About</Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-600 hover:text-cloud-dark">Experience</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-600 hover:text-cloud-dark">Education</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-cloud-dark">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Download CV</h3>
            <Button asChild variant="outline" className="gap-2">
              <a href="/Motlalepula_Mbali_Kgatlhane_CV.pdf" download>
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Motlalepula Mbali Kgatlhane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
