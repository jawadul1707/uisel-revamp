// src/pages/Home.jsx
import React from 'react';
import heroBg from '../assets/logos/home_header.jpg';
import aboutBg from '../assets/SUN01828.jpg';
import Navbar from '../components/Navbar';
import logo from '../assets/logos/uisel_logo.png';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
{/* Hero Section */}
<section 
  className="hero-section text-white min-h-screen flex items-center justify-center" 
  style={{
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
    backgroundSize: 'cover', // ✅ fits the entire image
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000' // optional: fills gaps if image doesn’t cover full screen
  }}
>
  <div className="container mx-auto px-4 text-center" id="who-we-are">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Skills for a Connected Future</h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
      Connecting Bangladeshi talent with international opportunities through world-class training and ethical recruitment.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a href="#contact" className="px-8 py-3 rounded-lg text-lg font-semibold transition" style={{ backgroundColor: '#18196b', color: '#fff' }}>
        Contact Us
      </a>
      <a href="#training" className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition" style={{ color: '#18196b' }}>
        Our Programs
      </a>
    </div>
  </div>
</section>
      {/* About Section */}
<section 
  id="about" 
  className="min-h-screen flex items-center bg-gray-50 py-10"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>
        Who We Are
      </h2>
      <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#18196b' }} />
    </div>
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <img 
          src={aboutBg} 
          alt="About UISEL" 
          className="rounded-xl shadow-lg w-full object-cover" 
        />
      </div>
      <div className="lg:w-1/2">
        <p className="text-lg text-gray-700 mb-6">
          UISEL (Universal Institute of Skills & Entrepreneurship Ltd.) is a government-approved training and recruitment organization dedicated to empowering Bangladeshi youth for global careers. We bridge the gap between local talent and international opportunities through world-class training, ethical recruitment, and lifelong support.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to create a globally mobile workforce that is skilled, responsible, and adaptable. We work with international employers, government agencies, and training partners to ensure every candidate is prepared for success abroad.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          With a focus on transparency, quality, and social responsibility, UISEL is committed to transforming lives and contributing to the national economy through safe and sustainable migration.
        </p>
        <div className="bg-[#e3e4f7] border-l-4" style={{ borderColor: '#18196b' }}>
          <div className="p-4">
            <span className="block text-lg font-semibold mb-1" style={{ color: '#18196b' }}>
              Our Vision
            </span>
            <span className="text-gray-700">
              To be the leading provider of global skills and ethical migration solutions from Bangladesh.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Services Section - FULLY MATCH index.html */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive workforce solutions prepare individuals for success at every stage of their international career journey.</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-graduation-cap" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">International Standard Skills Training</h3>
                  <p className="text-gray-600">Our technical and vocational training programs are developed in alignment with destination country standards. This ensures that every trainee gains not just skills, but also global employability.</p>
                </div>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-language" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Language Proficiency Programs</h3>
                  <p className="text-gray-600">We specialize in training candidates in Japanese, Korean, Arabic, and English for workplace communication. We teach culture, etiquette, and communication styles to ensure adaptability abroad.</p>
                </div>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-file-alt" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Responsible Recruitment & Visa Support</h3>
                  <p className="text-gray-600">We stand for ethical and transparent migration. From documentation to visa processing, we work legally and directly with trusted employers, ensuring smooth and exploitation-free migration journeys.</p>
                </div>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-briefcase" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Placement Preparation</h3>
                  <p className="text-gray-600">Our programs include SSW, EPS, G2G, TITP and other international schemes. We prepare candidates with mock interviews, role plays, and industry simulations so they are job-ready from day one.</p>
                </div>
              </div>
            </div>
            {/* Service Card 5 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-comments" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Soft Skills & Interview Coaching</h3>
                  <p className="text-gray-600">Global careers demand more than technical skills. We train our students in CV writing, professional behavior, teamwork, and cultural adaptation so they can stand out in the international workplace.</p>
                </div>
              </div>
            </div>
            {/* Service Card 6 */}
            <div className="service-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center p-6" style={{ backgroundColor: '#e3e4f7' }}>
                  <i className="fas fa-globe" style={{ color: '#18196b', fontSize: '2rem' }} />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Overseas Job Placement & Support</h3>
                  <p className="text-gray-600">UISEL goes beyond training. We connect workers with reliable overseas employers and provide ongoing support after deployment — from onboarding guidance to welfare assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ...existing code... */}
      {/* Global Reach Section */}
<section 
  id="global" 
  className="min-h-screen flex items-center py-10" 
  style={{ backgroundColor: '#f5f6fa' }}
>
  <style>{`
    .flag-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}</style>

  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-4" 
        style={{ color: '#18196b' }}
      >
        Our Global Reach
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Trusted by international employers, training institutions, and government bodies worldwide
      </p>
      <div 
        className="w-20 h-1 mx-auto mt-4" 
        style={{ backgroundColor: '#18196b' }} 
      />
    </div>

    <div className="flex flex-wrap justify-center gap-6 mb-12">
      <div className="text-center">
        <img src="https://flagcdn.com/w80/jp.png" alt="Japan" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Japan</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/kr.png" alt="South Korea" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">South Korea</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/ae.png" alt="UAE" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Middle East</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/sg.png" alt="Singapore" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Singapore</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/au.png" alt="Australia" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Australia</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/ca.png" alt="Canada" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Canada</span>
      </div>
      <div className="text-center">
        <img src="https://flagcdn.com/w80/eu.png" alt="Europe" className="flag-icon mx-auto mb-2" />
        <span className="text-gray-700 font-medium">Europe</span>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
      <p className="text-lg text-gray-700 mb-6">
        Our reputation is built on consistent quality, transparency, and reliability. Employers worldwide trust UISEL because we provide them with workers who are not only skilled, but also responsible, disciplined, and adaptable to international work cultures.
      </p>
      <p className="text-lg text-gray-700 font-semibold text-center">
        From Bangladesh to the world, our mission is clear: to create a globally mobile workforce with Global Skills for a Connected Future.
      </p>
    </div>
  </div>
</section>
      {/* Training Excellence Section */}
      {/* Training Excellence Section - MATCH index.html */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Training Excellence at UISEL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We don't just train people for jobs — we transform individuals into global professionals</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f4f5fa] rounded-lg p-6 border" style={{ borderColor: '#e3e4f7' }}>
              <div className="w-12 h-12 bg-[#e3e4f7] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chalkboard-teacher text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Training Infrastructure</h3>
              <p className="text-gray-600">State-of-the-art classrooms, technical labs, and simulation workshops equipped with the latest technology.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f4f5fa] rounded-lg p-6 border" style={{ borderColor: '#e3e4f7' }}>
              <div className="w-12 h-12 bg-[#e3e4f7] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-user-graduate text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Certified Trainers</h3>
              <p className="text-gray-600">Experts with international experience who bring real-world knowledge to the classroom.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f4f5fa] rounded-lg p-6 border" style={{ borderColor: '#e3e4f7' }}>
              <div className="w-12 h-12 bg-[#e3e4f7] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hands-On Practice</h3>
              <p className="text-gray-600">Every trainee learns through practical application, not just theory, with industry-standard equipment.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#f4f5fa] rounded-lg p-6 border" style={{ borderColor: '#e3e4f7' }}>
              <div className="w-12 h-12 bg-[#e3e4f7] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-language text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Language & Soft Skill Labs</h3>
              <p className="text-gray-600">Interactive sessions with role-plays, digital tools, and interview practice to build confidence.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-[#f4f5fa] rounded-lg p-6 border" style={{ borderColor: '#e3e4f7' }}>
              <div className="w-12 h-12 bg-[#e3e4f7] rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hands-helping text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Student Support</h3>
              <p className="text-gray-600">Hostel facilities, mid-day meals, and welfare services ensure trainees focus fully on learning.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-award text-xl" style={{ color: '#18196b' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">International Recognition</h3>
              <p className="text-gray-600">Our certifications and training are recognized by employers and institutions worldwide.</p>
            </div>
          </div>
          <div className="mt-12 rounded-xl p-8 text-center max-w-4xl mx-auto" style={{ backgroundColor: '#e3e4f7' }}>
            <p className="text-xl font-semibold" style={{ color: '#18196b' }}>Our goal is to ensure that every candidate leaves UISEL with confidence, competence, and readiness to thrive abroad.</p>
          </div>
        </div>
      </section>
      {/* Why Choose UISEL Section */}
      {/* Why Choose UISEL Section - MATCH index.html */}
      <section className="py-16" style={{ backgroundColor: '#18196b', color: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UISEL?</h2>
            <p className="text-xl max-w-3xl mx-auto">Choosing UISEL means choosing a partner who values your future</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#fff' }} />
          </div>
          {/* Promo Video */}
          <div className="w-full rounded-xl shadow-xl overflow-hidden mb-12" style={{ aspectRatio: '16/9', minHeight: '350px', background: '#000' }}>
            <iframe
              src="https://www.youtube.com/embed/rg0paGFh9XA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="UISEL Promo Video"
              className="w-full h-full min-h-[350px]"
              style={{ width: '100%', height: '100%', minHeight: '350px', display: 'block' }}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border" style={{ borderColor: '#bfc2e6', borderOpacity: 0.3 }}>
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">Government Approved</span>
              </div>
              <p>Licensed by the Ministry of Expatriates' Welfare & Overseas Employment and BMET.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border" style={{ borderColor: '#bfc2e6', borderOpacity: 0.3 }}>
              <div className="flex items-center mb-4">
                <i className="fas fa-user-shield text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">Ethical & Transparent</span>
              </div>
              <p>We follow ethical recruitment practices and maintain full transparency in all dealings.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-purple-300 border-opacity-30">
              <div className="flex items-center mb-4">
                <i className="fas fa-globe-asia text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">Global Network</span>
              </div>
              <p>Strong partnerships with employers, training institutions, and government agencies worldwide.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-purple-300 border-opacity-30">
              <div className="flex items-center mb-4">
                <i className="fas fa-user-friends text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">Personalized Support</span>
              </div>
              <p>Dedicated counselors guide candidates at every step, from training to placement and beyond.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-purple-300 border-opacity-30">
              <div className="flex items-center mb-4">
                <i className="fas fa-certificate text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">International Standards</span>
              </div>
              <p>Our training and recruitment processes meet the highest international benchmarks.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border border-purple-300 border-opacity-30">
              <div className="flex items-center mb-4">
                <i className="fas fa-heart text-2xl mr-3" style={{ color: '#fff' }} />
                <span className="font-bold text-lg">Life-Changing Impact</span>
              </div>
              <p>We empower individuals and families to achieve financial security and personal growth.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-6">We don't just prepare people for jobs; we prepare them for lifelong careers beyond borders.</p>
            <a href="#contact" className="bg-white px-8 py-3 rounded-lg text-lg font-semibold transition inline-block" style={{ color: '#18196b' }}>Start Your Journey</a>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      {/* Success Stories Section - MATCH index.html */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Our Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Each UISEL success story is proof of our purpose</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Success Story 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>From Trainee to Team Leader in Japan</h3>
                <p className="text-gray-700">"UISEL's training gave me the skills and confidence to succeed in Japan. Today, I lead a team of 20 in a top manufacturing company."</p>
                <span className="block mt-4 text-sm text-gray-500">— Rahim, SSW Graduate</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Success Story 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Achieving Dreams in South Korea</h3>
                <p className="text-gray-700">"I never imagined working abroad was possible. UISEL made it real for me and my family. I now work in a leading Korean tech firm."</p>
                <span className="block mt-4 text-sm text-gray-500">— Fatema, EPS Graduate</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Success Story 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>A New Life in the Middle East</h3>
                <p className="text-gray-700">"Thanks to UISEL, I found a great job in the UAE. The support didn't stop after placement—they still check in on me!"</p>
                <span className="block mt-4 text-sm text-gray-500">— Imran, G2G Graduate</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-8 text-center max-w-4xl mx-auto" style={{ backgroundColor: '#18196b', color: '#fff' }}>
            <p className="text-2xl font-bold mb-4">2,000+ trained professionals secured international employment through UISEL in just the last 3 years</p>
            <p className="text-lg">Every individual we train becomes a global ambassador for Bangladesh's talent and potential.</p>
          </div>
        </div>
      </section>
      {/* Training Areas Section */}
      {/* Training Areas Section - MATCH index.html */}
      <section id="training" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Our Core Training Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We don't just teach skills — we create global professionals</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Marine & Shipbuilding */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-ship text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Marine & Shipbuilding</h3>
                <p className="text-gray-700 text-center">Welding, pipe fitting, ship machinery, and marine electrical systems for global shipyards.</p>
              </div>
            </div>
            {/* Construction & Civil Works */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-hard-hat text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Construction & Civil Works</h3>
                <p className="text-gray-700 text-center">Masonry, carpentry, rebar, scaffolding, and finishing for international construction projects.</p>
              </div>
            </div>
            {/* Industrial & Technical */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-cogs text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Industrial & Technical</h3>
                <p className="text-gray-700 text-center">Machinery operation, electrical, electronics, and industrial maintenance for factories worldwide.</p>
              </div>
            </div>
            {/* Hospitality */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-concierge-bell text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Hospitality</h3>
                <p className="text-gray-700 text-center">Hotel management, housekeeping, food & beverage, and customer service for global hospitality brands.</p>
              </div>
            </div>
            {/* Healthcare & Caregiving */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-user-nurse text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Healthcare & Caregiving</h3>
                <p className="text-gray-700 text-center">Nursing, elderly care, and patient support for hospitals and care homes abroad.</p>
              </div>
            </div>
            {/* Customized Training */}
            <div className="training-area-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-200 transition-all">
              <div className="p-6 flex flex-col items-center">
                <i className="fas fa-user-cog text-3xl mb-4" style={{ color: '#18196b' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#18196b' }}>Customized Training</h3>
                <p className="text-gray-700 text-center">Specialized programs for employers and government projects, tailored to destination country needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Accreditations Section */}
      {/* Accreditations Section - MATCH index.html */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Our Accreditations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Recognized by leading national and international organizations</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Example logos, replace with real ones as needed */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/bmet.png')} alt="BMET" className="max-h-28 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/moewoe.jpg')} alt="MoEWOE" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/nsda.png')} alt="NSDA" className="max-h-28 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/bca.png')} alt="BCA" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/setsco.png')} alt="SETsCO" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/mom.jpg')} alt="MoM" className="max-h-24 w-auto" />
            </div>
            <div className="bg-black p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/wsq.jpg')} alt="WSQ" className="max-h-24 w-auto" />
            </div>
            <div className="bg-green-700 p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/otit.jpeg')} alt="OTIT" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/jitco.jpeg')} alt="JITCO" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/jlpt.png')} alt="JLPT" className="max-h-28 w-auto" />
            </div>
            <div className="bg-red-600 p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/lmia.png')} alt="LMIA" className="max-h-24 w-auto" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center h-32">
              <img src={require('../assets/logos/iso.jpg')} alt="BMET" className="max-h-24 w-auto" />
            </div>
          </div>
        </div>
      </section>
{/* Contact Section */}
<section
  id="contact"
  className="flex flex-col justify-center items-center text-center py-10"
  style={{ backgroundColor: '#18196b', color: '#fff' }}
>
  <div className="container mx-auto px-4">
    <div className="mb-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h2>
      <p className="text-lg max-w-2xl mx-auto">Let's build your global future together</p>
      <div className="w-20 h-1 mx-auto mt-3" style={{ backgroundColor: '#fff' }} />
    </div>

    <div className="max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-3">Get in Touch</h3>
      <p className="mb-4">
        Ready to start your global journey? Reach out to us for admissions, partnership, or any queries.
      </p>

      <div className="mb-3 flex items-center justify-center">
        <i className="fas fa-map-marker-alt mr-3 text-xl text-white" />
        <span>UISEL, 123 Main Road, Dhaka, Bangladesh</span>
      </div>

      <div className="mb-3 flex items-center justify-center">
        <i className="fas fa-phone-alt mr-3 text-xl text-white" />
        <a href="tel:+8801711752198" className="underline hover:text-gray-200">
          +880 1711 752198
        </a>
      </div>

      <div className="mb-3 flex items-center justify-center">
        <i className="fas fa-envelope mr-3 text-xl text-white" />
        <a href="mailto:info@uisel.com" className="underline hover:text-gray-200">
          info@uisel.com
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f text-2xl" /></a>
        <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin-in text-2xl" /></a>
        <a href="#" className="hover:text-gray-200"><i className="fab fa-youtube text-2xl" /></a>
      </div>
    </div>
  </div>
</section>

{/* Call to Action */}
<section
  className="flex flex-col justify-center items-center text-center py-8"
  style={{ backgroundColor: '#18196b', color: '#fff' }}
>
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      Admissions Open – Limited Seats Available!
    </h2>
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      Call us today or visit our office to take the first step toward your international career.
    </p>
    <a
      href="/apply"
      className="bg-white px-6 py-2 rounded-lg text-lg font-semibold transition inline-block"
      style={{ color: '#18196b' }}
    >
    Apply Now
    </a>
  </div>
</section>



      {/* Footer - MATCH index.html */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo & tagline */}
            <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}  // import your logo at the top of the file
                alt="UISEL Logo"
                className="w-12 h-12 object-contain"
              />
    {/* Optional: remove the text "UISEL" if you just want the logo */}
    {/* <span className="text-xl font-bold" style={{ color: '#b3b4e6' }}>UISEL</span> */}
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
                <li><a href="/training" className="text-gray-400 hover:text-white transition">Training</a></li>
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
    </>
  );
}