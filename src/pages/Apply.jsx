// src/pages/Apply.jsx
import React, { useState, useRef, useEffect } from 'react';
import applyBg from '../assets/apply_header.jpg';
import emailjs from 'emailjs-com';
import logo from '../assets/logos/uisel_logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// EmailJS config (replace with your own IDs from emailjs.com dashboard)
const EMAILJS_SERVICE_ID = 'service_employee';
const EMAILJS_TEMPLATE_ID_EMPLOYEE = 'template_k4i46vn';
const EMAILJS_TEMPLATE_ID_EMPLOYER = 'template_nqhgh5g';
const EMAILJS_USER_ID = 'Y0Dog4bf5rrXQgN5V';

export default function Apply() {
  const [formType, setFormType] = useState(null); // null, 'employee', or 'employer'
  const employeeRef = useRef(null);
  const employerRef = useRef(null);
  const [employeeForm, setEmployeeForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    education: '',
    experience: '',
    program: '',
    additional: ''
  });
  const [employerForm, setEmployerForm] = useState({
    companyName: '',
    country: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    workforceNeeds: '',
    additional: ''
  });

  const handleEmployeeChange = (e) => {
    setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value });
  };

  const handleEmployerChange = (e) => {
    setEmployerForm({ ...employerForm, [e.target.name]: e.target.value });
  };

  // IMPORTANT: In your EmailJS template, use variables like {{fullName}}, {{email}}, {{phone}}, {{dob}}, {{education}}, {{experience}}, {{program}}, {{additional}}
  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_EMPLOYEE,
      {
        to_email: 'info@uisel.com',
        fullName: employeeForm.fullName,
        email: employeeForm.email,
        phone: employeeForm.phone,
        dob: employeeForm.dob,
        education: employeeForm.education,
        experience: employeeForm.experience,
        program: employeeForm.program,
        additional: employeeForm.additional,
      },
      EMAILJS_USER_ID
    ).then(
      (result) => {
        alert('Application submitted and email sent!');
        setEmployeeForm({
          fullName: '', email: '', phone: '', dob: '', education: '', experience: '', program: '', additional: ''
        });
      },
      (error) => {
        alert('Failed to send email. Please try again.');
      }
    );
  };

  // IMPORTANT: In your EmailJS template, use variables like {{companyName}}, {{country}}, {{contactPerson}}, {{email}}, {{phone}}, {{industry}}, {{workforceNeeds}}, {{additional}}
  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_EMPLOYER,
      {
        to_email: 'info@uisel.com',
        companyName: employerForm.companyName,
        country: employerForm.country,
        contactPerson: employerForm.contactPerson,
        email: employerForm.email,
        phone: employerForm.phone,
        industry: employerForm.industry,
        workforceNeeds: employerForm.workforceNeeds,
        additional: employerForm.additional,
      },
      EMAILJS_USER_ID
    ).then(
      (result) => {
        alert('Partnership request submitted and email sent!');
        setEmployerForm({
          companyName: '', country: '', contactPerson: '', email: '', phone: '', industry: '', workforceNeeds: '', additional: ''
        });
      },
      (error) => {
        alert('Failed to send email. Please try again.');
      }
    );
  };

  return (
    <>
      <Navbar />
      {/* Half-Screen Hero Section */}
<section
  className="relative w-full h-[50vh] flex items-center justify-center text-white"
  style={{
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${applyBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="text-center px-4">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Be a part of UISEL
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
      Choose your role and join us
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/training"
        className="px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-200 transition"
      >
        Learn More
      </a>
    </div>
  </div>
</section>
      {/* Join Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#18196b' }}>Join UISEL</h1>
          <p className="text-xl text-gray-600 mb-8">Select your application type to begin your journey with us</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {/* Employee Card */}
            <button
              onClick={() => {
                setFormType('employee');
                // Wait for the form to render then scroll
                setTimeout(() => {
                  if (employeeRef.current) {
                    employeeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // account for sticky navbar by scrolling up a bit
                    window.scrollBy({ top: 800, behavior: 'smooth' });
                  }
                }, 80);
              }}
              className="w-full sm:w-72 min-h-[260px] bg-white border-2 border-[#18196b] rounded-xl shadow-md flex flex-col items-center justify-center px-8 py-8 transition-transform duration-300 hover:scale-105 focus:outline-none"
              style={{ color: '#18196b' }}
            >
              <i className="fas fa-user-tie text-4xl mb-4" style={{ color: '#18196b' }}></i>
              <span className="text-xl font-bold mb-2">As an Employee</span>
              <span className="text-gray-600 text-base">Apply for training & job placement</span>
            </button>
            {/* Employer Card */}
            <button
              onClick={() => {
                setFormType('employer');
                setTimeout(() => {
                  if (employerRef.current) {
                    employerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.scrollBy({ top: 800, behavior: 'smooth' });
                  }
                }, 80);
              }}
              className="w-full sm:w-72 min-h-[260px] bg-white border-2 border-[#18196b] rounded-xl shadow-md flex flex-col items-center justify-center px-8 py-8 transition-transform duration-300 hover:scale-105 focus:outline-none"
              style={{ color: '#18196b' }}
            >
              <i className="fas fa-building text-4xl mb-4" style={{ color: '#18196b' }}></i>
              <span className="text-xl font-bold mb-2">As an Employer</span>
              <span className="text-gray-600 text-base">Partner to hire skilled talent</span>
            </button>
          </div>
        </div>
      </section>
      {/* Employee Form */}
      {formType === 'employee' && (
        <section ref={employeeRef} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Employee Application Form</h2>
            <form onSubmit={handleEmployeeSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="fullName" placeholder="Full Name" value={employeeForm.fullName} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required />
                <input type="email" name="email" placeholder="Email" value={employeeForm.email} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required />
                <input type="tel" name="phone" placeholder="Phone Number" value={employeeForm.phone} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required />
                <input type="date" name="dob" placeholder="Date of Birth" value={employeeForm.dob} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required />
                <select name="education" value={employeeForm.education} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required>
                  <option value="">Select Education</option>
                  <option value="SSC">SSC/Equivalent</option>
                  <option value="HSC">HSC/Equivalent</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>
                <select name="experience" value={employeeForm.experience} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg" required>
                  <option value="">Select Experience</option>
                  <option value="none">No Experience</option>
                  <option value="1-3">1-3 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
              <div className="mb-4">
                <select name="program" value={employeeForm.program} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg w-full" required>
                  <option value="">Select Program</option>
                  <option value="marine">Marine & Shipbuilding</option>
                  <option value="construction">Construction & Civil Works</option>
                  <option value="industrial">Industrial & Technical</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare & Caregiving</option>
                </select>
              </div>
              <div className="mb-6">
                <textarea name="additional" rows={4} placeholder="Additional Information" value={employeeForm.additional} onChange={handleEmployeeChange} className="px-4 py-2 border rounded-lg w-full" />
              </div>
              <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold transition w-full">Submit Application</button>
            </form>
          </div>
        </section>
      )}
      {/* Employer Form */}
      {formType === 'employer' && (
        <section ref={employerRef} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Employer Partnership Form</h2>
            <form onSubmit={handleEmployerSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="companyName" placeholder="Company Name" value={employerForm.companyName} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required />
                <input type="text" name="country" placeholder="Country" value={employerForm.country} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required />
                <input type="text" name="contactPerson" placeholder="Contact Person" value={employerForm.contactPerson} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required />
                <input type="email" name="email" placeholder="Email" value={employerForm.email} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required />
                <input type="tel" name="phone" placeholder="Phone Number" value={employerForm.phone} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required />
                <select name="industry" value={employerForm.industry} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required>
                  <option value="">Select Industry</option>
                  <option value="construction">Construction</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="shipping">Shipping/Marine</option>
                  <option value="other">Other</option>
                </select>
                <select name="workforceNeeds" value={employerForm.workforceNeeds} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg" required>
                  <option value="">Select Workforce Needs</option>
                  <option value="skilled">Skilled Workers</option>
                  <option value="semi-skilled">Semi-Skilled Workers</option>
                  <option value="technical">Technical Professionals</option>
                  <option value="caregivers">Caregivers</option>
                  <option value="hospitality">Hospitality Staff</option>
                </select>
              </div>
              <div className="mb-6">
                <textarea name="additional" rows={4} placeholder="Additional Information" value={employerForm.additional} onChange={handleEmployerChange} className="px-4 py-2 border rounded-lg w-full" />
              </div>
              <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold transition w-full">Submit Partnership Request</button>
            </form>
          </div>
        </section>
      )}
      {formType && (
<div className="text-center py-4">
  <button
    onClick={() => {
      setFormType(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    className="underline"
    style={{ color: '#18196b' }}
  >
    Back to Selection
  </button>
</div>
      )}
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
                <li><a href="/training#marine" className="text-gray-400 hover:text-white transition">Marine & Shipbuilding</a></li>
                <li><a href="/training#construction" className="text-gray-400 hover:text-white transition">Construction & Civil Works</a></li>
                <li><a href="/training#industrial" className="text-gray-400 hover:text-white transition">Industrial & Technical</a></li>
                <li><a href="/training#hospitality" className="text-gray-400 hover:text-white transition">Hospitality</a></li>
                <li><a href="/training#healthcare" className="text-gray-400 hover:text-white transition">Healthcare & Caregiving</a></li>
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
