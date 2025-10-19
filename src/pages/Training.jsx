// src/pages/Training.jsx

import React from 'react';
import trainingBg from '../assets/training_header.jpg';
import logo from '../assets/logos/uisel_logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Country data for filter and flag display
const COUNTRIES = [
  { name: 'Japan', flag: 'https://flagcdn.com/w20/jp.png' },
  { name: 'South Korea', flag: 'https://flagcdn.com/w20/kr.png' },
  { name: 'Middle East', flag: 'https://flagcdn.com/w20/ae.png' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w20/sg.png' },
  { name: 'Australia', flag: 'https://flagcdn.com/w20/au.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w20/ca.png' },
  { name: 'Europe', flag: 'https://flagcdn.com/w20/eu.png' },
];

export default function Training() {
  const [selectedCountry, setSelectedCountry] = React.useState('All Countries');

  // Helper: map country name to flag for quick lookup
  const countryFlagMap = Object.fromEntries(COUNTRIES.map(c => [c.name, c.flag]));

  // Helper: for each program, list the countries it is available in
  const programCountries = {
    marine: ['Japan', 'South Korea', 'Middle East', 'Singapore'],
    construction: ['Middle East', 'Singapore', 'Canada', 'Australia'],
    industrial: ['Japan', 'Europe', 'Middle East', 'Canada'],
    hospitality: ['Middle East', 'Singapore', 'Australia', 'Canada'],
    healthcare: ['Japan', 'Canada', 'Australia', 'Europe'],
  };

  // Helper: for each specialization card, list the countries it is available in
  const specializationCountries = {
    'Marine Welding': ['Japan', 'South Korea', 'Middle East'],
    'Marine Electrical Systems': ['Middle East', 'Singapore'],
    'Marine Machinery': ['Japan', 'South Korea', 'Middle East'],
    'Masonry': ['Middle East', 'Singapore'],
    'Carpentry': ['Middle East', 'Canada', 'Australia'],
    'Rebar & Scaffolding': ['Middle East', 'Singapore'],
    'Machinery Operation': ['Japan', 'Europe'],
    'Electrical & Electronics': ['Middle East', 'Canada'],
    'Maintenance': ['Japan', 'Middle East', 'Europe'],
    'Housekeeping': ['Middle East', 'Singapore'],
    'Food & Beverage': ['Middle East', 'Australia', 'Canada'],
    'Customer Service': ['Middle East', 'Singapore'],
    'Nursing': ['Japan'],
    'Elderly Care': ['Japan', 'Canada', 'Australia', 'Europe'],
    'Patient Support': ['Middle East', 'Canada', 'Australia'],
  };

  // Helper: should a program section be shown for the selected country?
  const showProgram = (programKey) => {
    if (selectedCountry === 'All Countries') return true;
    return programCountries[programKey]?.includes(selectedCountry);
  };

  // Helper: should a specialization card be shown for the selected country?
  const showSpecialization = (spec) => {
    if (selectedCountry === 'All Countries') return true;
    return specializationCountries[spec]?.includes(selectedCountry);
  };

  return (
    <>
      <Navbar />
      <section
  className="relative w-full h-[50vh] flex items-center justify-center text-white"
  style={{
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${trainingBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="text-center px-4">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Our Training Programs
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
      Comprehensive skill development programs tailored for international job markets
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/apply"
        className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-purple-700 transition"
      >
        Get Started
      </a>
    </div>
  </div>
</section>
      {/* Filter Section */}
      {/* Country Filter Section - MATCH training.html */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Destination Country:</h2>
          <div className="flex flex-wrap gap-3">
            <button
              className={`country-filter-btn px-4 py-2 rounded-full border border-[#18196b] transition${selectedCountry === 'All Countries' ? ' bg-[#18196b] text-white' : ' text-[#18196b] hover:bg-[#18196b] hover:text-white'}`}
              onClick={() => setSelectedCountry('All Countries')}
            >
              All Countries
            </button>
            {COUNTRIES.map((country) => (
              <button
                key={country.name}
                className={`country-filter-btn px-4 py-2 rounded-full border border-[#18196b] transition flex items-center${selectedCountry === country.name ? ' bg-[#18196b] text-white' : ' text-[#18196b] hover:bg-[#18196b] hover:text-white'}`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <img src={country.flag} alt={country.name} className="inline-block mr-2" /> {country.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Core Training Areas Section */}
      {/* Core Training Areas Section - MATCH training.html */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Core Training Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Specialized programs designed for specific international job markets</p>
            <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#18196b' }} />
          </div>
          {/* Marine & Shipbuilding */}
          {showProgram('marine') && (
          <div id="marine" className="program-detail-section mb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/3">
                <div className="bg-blue-100 rounded-xl p-8 h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <i className="fas fa-ship text-blue-600 text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Marine & Shipbuilding</h3>
                  <p className="text-gray-600 mb-6 text-center">Welding, pipe fitting, ship machinery, and marine electrical systems for global shipyards.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <img src="https://flagcdn.com/w20/jp.png" alt="Japan" />
                    <img src="https://flagcdn.com/w20/kr.png" alt="South Korea" />
                    <img src="https://flagcdn.com/w20/ae.png" alt="Middle East" />
                    <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-blue-600">Program Details</h4>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Duration: 6-12 months</li>
                      <li>Includes hands-on workshops and industry simulation</li>
                      <li>Certification recognized by international employers</li>
                    </ul>
                    <h4 className="text-xl font-bold mb-2 text-blue-600">Career Opportunities</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Shipyard Technician</li>
                      <li>Marine Welder</li>
                      <li>Pipe Fitter</li>
                      <li>Marine Electrician</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Specializations: Welding, Electrical, Pipe Fitting, Machinery</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Specializations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Marine Welding', icon: 'fas fa-bolt', color: 'text-blue-600', bg: 'bg-blue-100', desc: 'Specialized welding techniques for shipbuilding and repair' },
                { name: 'Marine Electrical Systems', icon: 'fas fa-plug', color: 'text-blue-600', bg: 'bg-blue-100', desc: 'Installation and maintenance of ship electrical systems' },
                { name: 'Marine Machinery', icon: 'fas fa-anchor', color: 'text-blue-600', bg: 'bg-blue-100', desc: 'Operation and maintenance of ship machinery and engines' },
              ].filter(card => showSpecialization(card.name)).map(card => (
                <div key={card.name} className="training-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                  <div className={`h-40 ${card.bg} flex items-center justify-center`}>
                    <i className={`${card.icon} ${card.color} text-5xl`}></i>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-800 mb-2">{card.name}</h5>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {specializationCountries[card.name].map(cn => (
                        <img key={cn} src={countryFlagMap[cn]} alt={cn} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
          {/* Construction & Civil Works */}
          {showProgram('construction') && (
          <div id="construction" className="program-detail-section mb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/3">
                <div className="bg-orange-50 rounded-xl p-8 h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <i className="fas fa-hard-hat text-5xl" style={{ color: '#e67e22' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Construction & Civil Works</h3>
                  <p className="text-gray-600 mb-6 text-center">Masonry, carpentry, rebar, scaffolding, and finishing for international construction projects.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <img src="https://flagcdn.com/w20/ae.png" alt="Middle East" />
                    <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" />
                    <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
                    <img src="https://flagcdn.com/w20/au.png" alt="Australia" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#e67e22' }}>Program Details</h4>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Duration: 6-12 months</li>
                      <li>Practical training in real construction environments</li>
                      <li>Internationally recognized certification</li>
                    </ul>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#e67e22' }}>Career Opportunities</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Mason</li>
                      <li>Carpenter</li>
                      <li>Rebar Worker</li>
                      <li>Finishing Specialist</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Specializations: Masonry, Carpentry, Rebar, Scaffolding</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Specializations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Masonry', icon: 'fas fa-hammer', color: 'text-orange-600', bg: 'bg-orange-100', desc: 'Bricklaying, blockwork, and finishing for global construction' },
                { name: 'Carpentry', icon: 'fas fa-toolbox', color: 'text-orange-600', bg: 'bg-orange-100', desc: 'Woodwork, formwork, and finishing for international projects' },
                { name: 'Rebar & Scaffolding', icon: 'fas fa-hard-hat', color: 'text-orange-600', bg: 'bg-orange-100', desc: 'Steel fixing, rebar, and scaffolding for safe construction' },
              ].filter(card => showSpecialization(card.name)).map(card => (
                <div key={card.name} className="training-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                  <div className={`h-40 ${card.bg} flex items-center justify-center`}>
                    <i className={`${card.icon} ${card.color} text-5xl`}></i>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-800 mb-2">{card.name}</h5>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {specializationCountries[card.name].map(cn => (
                        <img key={cn} src={countryFlagMap[cn]} alt={cn} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
          {/* Industrial & Technical */}
          {showProgram('industrial') && (
          <div id="industrial" className="program-detail-section mb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/3">
                <div className="bg-green-50 rounded-xl p-8 h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <i className="fas fa-cogs text-5xl" style={{ color: '#27ae60' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Industrial & Technical</h3>
                  <p className="text-gray-600 mb-6 text-center">Machinery operation, electrical, electronics, and industrial maintenance for factories worldwide.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <img src="https://flagcdn.com/w20/jp.png" alt="Japan" />
                    <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                    <img src="https://flagcdn.com/w20/ae.png" alt="Middle East" />
                    <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#27ae60' }}>Program Details</h4>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Duration: 6-12 months</li>
                      <li>Hands-on training with industry-standard equipment</li>
                      <li>Certification for global employability</li>
                    </ul>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#27ae60' }}>Career Opportunities</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Machine Operator</li>
                      <li>Industrial Electrician</li>
                      <li>Maintenance Technician</li>
                      <li>Electronics Specialist</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Specializations: Machinery, Electrical, Electronics, Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Specializations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Machinery Operation', icon: 'fas fa-industry', color: 'text-green-600', bg: 'bg-green-100', desc: 'Operating and maintaining industrial machinery' },
                { name: 'Electrical & Electronics', icon: 'fas fa-bolt', color: 'text-green-600', bg: 'bg-green-100', desc: 'Electrical systems, electronics, and industrial automation' },
                { name: 'Maintenance', icon: 'fas fa-tools', color: 'text-green-600', bg: 'bg-green-100', desc: 'Industrial maintenance and troubleshooting' },
              ].filter(card => showSpecialization(card.name)).map(card => (
                <div key={card.name} className="training-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                  <div className={`h-40 ${card.bg} flex items-center justify-center`}>
                    <i className={`${card.icon} ${card.color} text-5xl`}></i>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-800 mb-2">{card.name}</h5>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {specializationCountries[card.name].map(cn => (
                        <img key={cn} src={countryFlagMap[cn]} alt={cn} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
          {/* Hospitality */}
          {showProgram('hospitality') && (
          <div id="hospitality" className="program-detail-section mb-20">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/3">
                <div className="bg-red-50 rounded-xl p-8 h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <i className="fas fa-concierge-bell text-5xl" style={{ color: '#e74c3c' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Hospitality</h3>
                  <p className="text-gray-600 mb-6 text-center">Hotel management, housekeeping, food & beverage, and customer service for global hospitality brands.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <img src="https://flagcdn.com/w20/ae.png" alt="Middle East" />
                    <img src="https://flagcdn.com/w20/sg.png" alt="Singapore" />
                    <img src="https://flagcdn.com/w20/au.png" alt="Australia" />
                    <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#e74c3c' }}>Program Details</h4>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Duration: 6-12 months</li>
                      <li>Practical training in hotels and hospitality venues</li>
                      <li>Certification for international hospitality careers</li>
                    </ul>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#e74c3c' }}>Career Opportunities</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Hotel Manager</li>
                      <li>Housekeeping Supervisor</li>
                      <li>Food & Beverage Staff</li>
                      <li>Customer Service Executive</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Specializations: Hotel Management, Housekeeping, F&B, Customer Service</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Specializations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Housekeeping', icon: 'fas fa-bed', color: 'text-red-600', bg: 'bg-red-100', desc: 'Professional housekeeping and facility management' },
                { name: 'Food & Beverage', icon: 'fas fa-utensils', color: 'text-red-600', bg: 'bg-red-100', desc: 'F&B service, kitchen operations, and hospitality skills' },
                { name: 'Customer Service', icon: 'fas fa-concierge-bell', color: 'text-red-600', bg: 'bg-red-100', desc: 'Front desk, guest relations, and customer care' },
              ].filter(card => showSpecialization(card.name)).map(card => (
                <div key={card.name} className="training-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                  <div className={`h-40 ${card.bg} flex items-center justify-center`}>
                    <i className={`${card.icon} ${card.color} text-5xl`}></i>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-800 mb-2">{card.name}</h5>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {specializationCountries[card.name].map(cn => (
                        <img key={cn} src={countryFlagMap[cn]} alt={cn} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
          {/* Healthcare & Caregiving */}
          {showProgram('healthcare') && (
          <div id="healthcare" className="program-detail-section">
            <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
              <div className="lg:w-1/3">
                <div className="bg-teal-50 rounded-xl p-8 h-full transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <i className="fas fa-user-nurse text-5xl" style={{ color: '#1abc9c' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Healthcare & Caregiving</h3>
                  <p className="text-gray-600 mb-6 text-center">Nursing, elderly care, and patient support for hospitals and care homes abroad.</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <img src="https://flagcdn.com/w20/jp.png" alt="Japan" />
                    <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
                    <img src="https://flagcdn.com/w20/au.png" alt="Australia" />
                    <img src="https://flagcdn.com/w20/eu.png" alt="Europe" />
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#1abc9c' }}>Program Details</h4>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Duration: 6-12 months</li>
                      <li>Clinical training and caregiving practice</li>
                      <li>Certification for healthcare careers abroad</li>
                    </ul>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#1abc9c' }}>Career Opportunities</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Nurse</li>
                      <li>Caregiver</li>
                      <li>Patient Support Staff</li>
                      <li>Healthcare Assistant</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <span className="font-semibold text-gray-700">Specializations: Nursing, Elderly Care, Patient Support</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Specializations</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Nursing', icon: 'fas fa-user-nurse', color: 'text-teal-600', bg: 'bg-teal-100', desc: 'Professional nursing for hospitals and clinics' },
                { name: 'Elderly Care', icon: 'fas fa-heartbeat', color: 'text-teal-600', bg: 'bg-teal-100', desc: 'Caregiving for the elderly in homes and facilities' },
                { name: 'Patient Support', icon: 'fas fa-hands-helping', color: 'text-teal-600', bg: 'bg-teal-100', desc: 'Supporting patients in hospitals and care homes' },
              ].filter(card => showSpecialization(card.name)).map(card => (
                <div key={card.name} className="training-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                  <div className={`h-40 ${card.bg} flex items-center justify-center`}>
                    <i className={`${card.icon} ${card.color} text-5xl`}></i>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-800 mb-2">{card.name}</h5>
                    <p className="text-gray-600 mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {specializationCountries[card.name].map(cn => (
                        <img key={cn} src={countryFlagMap[cn]} alt={cn} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>
      {/* Ready to Start Section */}
      {/* Call to Action Section - MATCH training.html */}
      <section className="py-12 bg-[#18196b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your International Career?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Our admissions team is ready to guide you through the application process and help you choose the right program.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/apply" className="bg-white px-8 py-3 rounded-lg text-lg font-semibold transition inline-block mr-4" style={{ color: '#18196b' }}>
            <i className="fas fa-phone-alt mr-2" /> Apply Now
          </a>
          </div>
        </div>
      </section>
      {/* Footer - MATCH training.html */}
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
            {/* Column 2: Training Programs */}
            <div>
              <h3 className="text-lg font-bold mb-4">Training Programs</h3>
              <ul className="space-y-2">
                <li><a href="#marine" className="text-gray-400 hover:text-white transition">Marine & Shipbuilding</a></li>
                <li><a href="#construction" className="text-gray-400 hover:text-white transition">Construction & Civil Works</a></li>
                <li><a href="#industrial" className="text-gray-400 hover:text-white transition">Industrial & Technical</a></li>
                <li><a href="#hospitality" className="text-gray-400 hover:text-white transition">Hospitality</a></li>
                <li><a href="#healthcare" className="text-gray-400 hover:text-white transition">Healthcare & Caregiving</a></li>
              </ul>
            </div>
            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#global" className="text-gray-400 hover:text-white transition">Global Reach</a></li>
                <li><a href="/training" className="text-gray-400 hover:text-white transition">Training</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            {/* Column 4: Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start"><i className="fas fa-map-marker-alt mr-2 mt-1" /> UISEL, 123 Main Road, Dhaka, Bangladesh</li>
                <li className="flex items-start"><i className="fas fa-phone-alt mr-2 mt-1" /> <a href="tel:+8801711752198" className="underline hover:text-white">+880 1711 752198</a></li>
                <li className="flex items-start"><i className="fas fa-envelope mr-2 mt-1" /> <a href="mailto:info@uisel.com" className="underline hover:text-white">info@uisel.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Universal Institute of Skills & Entrepreneurship Ltd. (UISEL). All rights reserved.</p>
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