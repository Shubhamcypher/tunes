import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    
    <footer className="bg-black dark:bg-dot-orange-500/[0.2] text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Company Info */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 ">
            <h5 className="text-white text-lg font-bold mb-4">About Us</h5>
            <p className="text-gray-400 ">
              We are a leading music academy providing comprehensive music education and training to students of all ages and levels.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className='flex items-center justify-center'>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
              <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/" className="transition-all duration-200 hover:font-bold hover:text-orange-500">Home</Link></li>
                <li><Link href="/courses" className="transition-all duration-200 hover:font-bold hover:text-orange-500">Courses</Link></li>
                <li><Link href="#" className="transition-all duration-200 hover:font-bold hover:text-orange-500">Events</Link></li>
                <li><Link href="/contact" className="transition-all duration-200 hover:font-bold hover:text-orange-500">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-white text-lg font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4 ">
              <a href="https://www.facebook.com" target='blank' className="text-gray-400 hover:text-blue-700 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.5v-9.293H9.692v-3.637h3.132V8.905c0-3.1 1.892-4.787 4.655-4.787 1.323 0 2.46.099 2.789.143v3.236h-1.915c-1.501 0-1.793.714-1.793 1.763v2.31h3.586l-.467 3.637h-3.12V24h6.112c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"/>
                </svg>
              </a>
              <a href="https://www.twitter.com" target='blank' className="text-gray-400 hover:text-blue-400 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter Icon */}
                  <path d="M23.954 4.569c-.885.385-1.832.648-2.825.765 1.014-.609 1.794-1.574 2.163-2.723-.951.564-2.005.973-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.923 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.722-.666 1.562-.666 2.475 0 1.708.87 3.215 2.188 4.096-.807-.026-1.566-.248-2.23-.616v.062c0 2.385 1.698 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.626 1.956 2.444 3.379 4.604 3.418-1.68 1.318-3.809 2.105-6.102 2.105-.397 0-.788-.023-1.176-.068 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14-7.498 14-13.986 0-.213-.005-.425-.014-.637.962-.695 1.8-1.56 2.462-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com" target='blank' className="text-gray-400 hover:text-red-500  transition duration-200">
                <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24">
                  {/* Instagram Icon */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.31 3.608 1.285.974.975 1.223 2.242 1.285 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.31 2.633-1.285 3.608-.975.974-2.242 1.223-3.608 1.285-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.31-3.608-1.285-.974-.975-1.223-2.242-1.285-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.31-2.633 1.285-3.608.975-.974 2.242-1.223 3.608-1.285 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.591.071-3.004.362-4.109 1.468-.975.975-1.223 2.242-1.285 3.608-.058 1.266-.07 1.646-.07 4.85s.012 3.584.07 4.85c.062 1.366.31 2.633 1.285 3.608.975.974 2.242 1.223 3.608 1.285 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.31 3.608-1.285.974-.975 1.223-2.242 1.285-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.31-2.633-1.285-3.608-.975-.974-2.242-1.223-3.608-1.285-1.266-.058-1.646-.07-4.85-.07z"/>
                  <circle cx="12.145" cy="12.188" r="3.847"/>
                  <path d="M18.447 6.211c-.797 0-1.443.646-1.443 1.443s.646 1.443 1.443 1.443 1.443-.646 1.443-1.443-.646-1.443-1.443-1.443z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com" target='blank' className="text-gray-400 hover:text-blue-500 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* LinkedIn Icon */}
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.544C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.728V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.69V9.153h3.43v11.3zM5.406 7.79h-.022c-1.15 0-1.892-.792-1.892-1.782 0-1.016.764-1.784 1.938-1.784 1.175 0 1.892.767 1.914 1.784 0 .99-.739 1.782-1.938 1.782zM20.451 20.452h-3.431v-6.068c0-1.524-.544-2.565-1.91-2.565-1.04 0-1.656.697-1.927 1.37-.1.25-.126.6-.126.948v6.315h-3.43s.045-10.245 0-11.3h3.43v1.6c.455-.7 1.268-1.704 3.084-1.704 2.254 0 3.948 1.47 3.948 4.63v6.774z"/>
                </svg>
              </a>
              <a href="https://www.github.com" target='blank' className="text-gray-400 hover:text-green-700 transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* GitHub Icon */}
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.82-.261.82-.579v-2.244c-3.338.726-4.043-1.415-4.043-1.415-.546-1.386-1.333-1.757-1.333-1.757-1.089-.745.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.996.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.303 1.23a11.47 11.47 0 0 1 3.004-.404c1.019.005 2.047.138 3.004.404 2.296-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.071v2.475c0 .318.221.691.825.576C20.562 21.8 24 17.31 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h5>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 text-gray-900 bg-white rounded focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-teal-600 hover:bg-blue-600 rounded transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p>&copy; 2024 Music Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
