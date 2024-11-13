import React, { useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';  // Social icons
import Aj from '/src/assets/images/Untitled design (1).png'

function Footer() {
  // Form state to capture user input
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle sending email here, such as using an API or email service
    console.log('Email:', email);
    console.log('Message:', message);
    alert('Thank you for subscribing!');
  };

  return (
    <>
            <section className="bg-gray-800 text-white py-12 px-5 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to my Newsletter</h2>
            <p className="text-gray-400 mb-6">Get the latest updates, tips, and more directly in your inbox!</p>
            
            <div className="flex justify-center">
            <form action="https://formspree.io/f/mpwzrybe" method="POST" className="flex flex-col items-center space-y-4 w-full md:w-[400px]">
                <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                />
                <textarea
                name="message"
                placeholder="Your message (optional)"
                className="px-4 py-2 rounded-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500"
                />
                <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                Subscribe
                </button>
            </form>
            </div>
        </div>
        </section>


      <footer className="bg-black text-white py-12 px-5 md:px-16 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img src={Aj} alt="Logo" className='w-[120px] rounded-full' />
            <p className="text-gray-400">Front-end Developer. <br /> I can help you and create stunning and scalable sites</p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Connect with me</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/johnson-adedokun/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://wa.me/+2349057123589" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} className="text-gray-400 hover:text-white transition" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100068853946524" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Johnson adedokun. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
