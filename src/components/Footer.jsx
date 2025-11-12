import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3a1d0b] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">पक्षाविषयी</h3>
          <ul className="space-y-2 text-sm">
            <li>ध्येय-धोरणं</li>
            <li>प्रमुख भूमिका</li>
            <li>मुख्य कार्यकारिणी</li>
            <li>पक्षाचा इतिहास</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">माध्यम</h3>
          <ul className="space-y-2 text-sm">
            <li>महत्वाची पत्रं</li>
            <li>ताज्या घडामोडी</li>
            <li>ई-जाहिरात</li>
            <li>संपर्क</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">महत्वाचे दुवे</h3>
          <ul className="space-y-2 text-sm">
            <li>आम्ही काय केलं</li>
            <li>आगामी कार्यक्रम</li>
            <li>उद्गार श्रीमनसंत</li>
            <li>संपर्क</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-2">
            महाराष्ट्र नवनिर्माण सेना, <br /> मुख्यालय.
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            दुसरा मजला, गाडगीळ वाडा, शिवाजी ठक्कर मार्ग, माणूस भवन (दादर),
            मुंबई, महाराष्ट्र ४०००१४.
          </p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-[#f47c20] hover:bg-orange-600 p-2.5 rounded-full transition"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a
              href="#"
              className="bg-[#f47c20] hover:bg-orange-600 p-2.5 rounded-full transition"
            >
              <FaTwitter className="text-white text-sm" />
            </a>
            <a
              href="#"
              className="bg-[#f47c20] hover:bg-orange-600 p-2.5 rounded-full transition"
            >
              <FaInstagram className="text-white text-sm" />
            </a>
            <a
              href="#"
              className="bg-[#f47c20] hover:bg-orange-600 p-2.5 rounded-full transition"
            >
              <FaYoutube className="text-white text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © २०२५ सर्व हक्क राखीव. महाराष्ट्र नवनिर्माण सेना, मुख्यालय कार्यालय.
      </div>
    </footer>
  );
};

export default Footer;
