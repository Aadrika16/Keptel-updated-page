import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b2744] text-gray-200 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto">

        {/* Top Border Rule */}
        <hr className="border-gray-700/80 mb-16" />

        {/* Footer 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Column 1: Logo & social links (decreased spacing using space-y-3) */}
          <div className="lg:col-span-6 flex flex-col items-start justify-start space-y-3 text-left">
            <div className="w-full flex justify-start">
              <img 
                src="/logo.svg"
                alt="Keptel"
                className="w-100 h-auto object-left -ml-20"
              />
            </div>
            <div className="flex items-center justify-start space-x-3 pt-0 w-full ml-2 -mt-10">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaLinkedinIn className="text-gray-300 text-sm" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaTwitter className="text-gray-300 text-sm" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaFacebookF className="text-gray-300 text-sm" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white/10 transition-colors">
                <FaInstagram className="text-gray-300 text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Office Location / Contact Info */}
          <div className="lg:col-span-6 lg:border-l lg:border-gray-700/80 lg:pl-12 space-y-8">
            {/* Address Row */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1">
                <FaMapMarkerAlt className="text-gray-300 text-sm" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1 text-white">Hyderabad , India</h3>
                <p className="leading-relaxed text-gray-300 text-sm">
                  Co-Working Spaces Door No.: 1-60/8/A & B, 3rd Floor KNR Square Opp. The Platina Gachibowli, Kondapur Hyderabad – 500032
                </p>
              </div>
            </div>

            {/* Email Row */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
              <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                <FaEnvelope className="text-gray-300 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a href="mailto:info@kepteltech.com" className="text-gray-200 text-sm hover:underline">
                  info@kepteltech.com
                </a>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
              <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                <FaPhoneAlt className="text-gray-300 text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="text-gray-200 text-sm">+91 8884344442</p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer placed below the main rows, aligned to the left */}
        <div className="mt-16 mb-8 text-left">
          <p className="max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Disclaimer:</span> Keptel does not charge any money from job seekers. Report suspicious activities to info@kepteltech.com.
          </p>
        </div>

        {/* Bottom Border Rule */}
        <hr className="border-gray-700/80 mb-6" />

        {/* Copyright */}
        <div className="flex justify-center items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Keptel Analytics Space. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}