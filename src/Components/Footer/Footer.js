import React from "react";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold mb-4 text-white">
                About Us
              </h4>
              <p className="leading-relaxed">
                MVP Vishwakosha IAS Academy stands as a centre of excellence in
                Civil Services education, dedicated to guiding aspirants toward
                success in UPSC, KPSC, and other competitive examinations.
                With a focus on discipline, conceptual clarity, and holistic
                learning, the Academy nurtures analytical thinking, ethical
                values, and leadership qualities.
                Our mission is to empower every aspirant with the confidence and
                competence to serve the nation with integrity.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📞</span>
                  <span>+91 8792783540</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <span>info@mvpvishwakoshaias.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span>Bangalore, India</span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {/* Telegram */}
                <a href="#" className="social-icon bg-[#0088cc]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M9.993 15.674l-.403 5.676c.577 0 .827-.249 1.127-.548l2.707-2.563 5.611 4.105c1.029.567 1.757.27 2.021-.952L24 2.745c.336-1.546-.558-2.151-1.558-1.78L1.112 9.257c-1.51.59-1.487 1.436-.273 1.815l5.46 1.705L19.06 4.86c.603-.392 1.152-.175.7.217" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="social-icon bg-[#FF0000]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a2.958 2.958 0 0 0-2.082-2.094C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.416.592A2.958 2.958 0 0 0 .502 6.186C0 8.11 0 12 0 12s0 3.89.502 5.814a2.958 2.958 0 0 0 2.082 2.094C4.495 20.5 12 20.5 12 20.5s7.505 0 9.416-.592a2.958 2.958 0 0 0 2.082-2.094C24 15.89 24 12 24 12s0-3.89-.502-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="social-icon bg-[#0077B5]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.325 7.433c-1.13 0-2.048-.92-2.048-2.052 0-1.132.918-2.05 2.048-2.05s2.048.918 2.048 2.05c0 1.132-.918 2.052-2.048 2.052zM20.452 20.452h-3.53v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666h-3.53V9h3.389v1.561h.047c.472-.9 1.624-1.85 3.343-1.85 3.57 0 4.229 2.35 4.229 5.408v6.333z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="social-icon bg-[#1877F2]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="social-icon bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 6.838a5.162 5.162 0 1 0 0 10.324 5.162 5.162 0 0 0 0-10.324zm6.406-.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
            © 2025 MVP VISHWAKOSHA IAS ACADEMY. All rights reserved.
          </p>

          <WhatsAppButton />
        </div>
      </footer>

      {/* Reusable class */}
      <style>
        {`
          .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          .social-icon:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
