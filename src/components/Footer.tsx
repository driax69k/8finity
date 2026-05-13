import { SOCIAL_LINKS, NAV_LINKS } from '../constants';
import logo from '../assets/LOGO.png';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center mb-6">
              <img src={logo} alt="8FINITY" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneering the intersection of luxury design and futuristic technology.
              We create digital masterpieces for those who demand excellence.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-gold font-display font-bold text-sm uppercase tracking-widest mb-6">Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gold font-display font-bold text-sm uppercase tracking-widest mb-6">Expertise</h3>
            <ul className="space-y-4">
              {['Digital Marketing', 'Social Media Management', 'Customer Service Role', 'Marketing and Sales', 'Cold Calling / Appointment Settings', 'Executive Assistants / General VA',].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/30 text-xs text-center">
            &copy; {new Date().getFullYear()} 8Finity Agency. All rights reserved. Made for the future.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/30 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
