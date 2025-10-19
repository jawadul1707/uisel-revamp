export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo & tagline */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#18196b] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UI</span>
                </div>
                <span className="text-xl font-bold" style={{ color: '#b3b4e6' }}>UISEL</span>
              </div>
              <p className="text-gray-400 mb-4">Universal Institute of Skills & Entrepreneurship Ltd.</p>
              <p className="text-gray-400">Empowering Bangladesh for global careers.</p>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#global" className="text-gray-400 hover:text-white transition">Global Reach</a></li>
                <li><a href="#training" className="text-gray-400 hover:text-white transition">Training</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            {/* Column 3: Programs */}
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">SSW Japan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">EPS Korea</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">G2G Middle East</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">TITP</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Custom Training</a></li>
              </ul>
            </div>
            {/* Column 4: Contact & Social */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2" /> UISEL, 123 Main Road, Dhaka</li>
                <li className="flex items-center"><i className="fas fa-phone-alt mr-2" /> <a href="tel:+8801711752198" className="underline hover:text-white">+880 1711 752198</a></li>
                <li className="flex items-center"><i className="fas fa-envelope mr-2" /> <a href="mailto:info@uisel.com" className="underline hover:text-white">info@uisel.com</a></li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook-f text-2xl" /></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in text-2xl" /></a>
                <a href="#" className="hover:text-white"><i className="fab fa-youtube text-2xl" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} UISEL. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  );
}