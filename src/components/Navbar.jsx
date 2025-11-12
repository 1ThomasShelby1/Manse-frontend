import React, { useState } from "react";
import mobilelogo from "../assets/MNS-flag-rajmudra-logo.png";
import logo from "../assets/MNS-flag-rajmudra.png";
import wallBorder from "../assets/wall-border-40x35-icon.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleNavigation = (link) => {
    if (link === "तक्रार करा") {
      navigate("/complaint"); // Internal navigation
    } else if (link === "अॅडमिन लॉगिन") {
      window.open("https://manse-admin.onrender.com", "_blank"); // Opens in new tab
    }
  };

  const navItems = [
    {
      label: "आमच्याविषयी",
      dropdown: true,
      links: ["मुखपृष्ठ"],
    },
    {
      label: "पक्ष कार्य",
      dropdown: true,
      links: ["निवेदने/आंदोलने", "प्रसारमाध्यमांद्‌वारे दखल", "ई-लाइब्ररी"],
    },
    {
      label: "संघटना",
      dropdown: true,
      links: ["नाशिक शहर", "नाशिक ग्रामिण", "अंगिकृत संघटना"],
    },
    {
      label: "तक्रार निवारण केंद्र",
      dropdown: true,
      links: ["तक्रार करा", "पदाधिकारी लॉगिन", "अॅडमिन लॉगिन"],
    },
    {
      label: "संपर्क",
      dropdown: true,
      links: [],
    },
  ];

  // Wall icons
  const repeatCount = 38;
  const wallIcons = Array.from({ length: repeatCount }).map((_, idx) => (
    <img
      key={`wall-icon-${idx}`}
      src={wallBorder}
      alt="Fort Wall Icon"
      className="inline-block h-[35px] w-auto"
    />
  ));

  return (
    <header className="w-full">
      {/* ---------- ORANGE HEADER ---------- */}
      <div className="relative bg-[#f47311] flex flex-col items-center pt-3 overflow-hidden md:pt-3">
        {/* Desktop logo */}
        <div className="hidden md:flex justify-center items-center mb-2 py-2">
          <div className="h-[105px] w-[105px] flex justify-center items-center">
            <img
              src={logo}
              alt="MNS Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden justify-between items-center w-full px-4 py-2">
          <div className="flex items-center gap-2">
            <img
              src={mobilelogo}
              alt="MNS Logo"
              className="h-[45px] w-auto object-contain"
            />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------- WALL BORDER ---------- */}
      <div className="w-full overflow-hidden whitespace-nowrap relative z-10 -mb-1 md:mb-0">
        {wallIcons}
      </div>

      {/* ---------- WHITE SECTION ---------- */}
      <div className="bg-white text-center shadow-sm md:py-8">
        {/* Title */}
        <h1 className="hidden md:block text-3xl font-extrabold text-[#f47c20] mb-7">
          महाराष्ट्र नवनिर्माण सेना
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center gap-14 text-gray-500 font-semibold text-[17px]">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative cursor-pointer group inline-flex items-center gap-1"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span
                className={`flex items-center gap-1 transition-colors ${activeDropdown === i ? "text-[#f47c20]" : "text-gray-500"
                  }`}
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === i ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === i && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-md text-sm w-48 z-50">
                  <ul className="text-left p-2">
                    {item.links.map((link, j) => (
                      <li
                        key={j}
                        className="py-2 px-4 hover:text-[#f47c20] cursor-pointer"
                        onClick={() => handleNavigation(link)} // ✅ Navigation click handler
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ---------- MOBILE MENU ---------- */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white border-t border-gray-200 shadow-md">
            <ul className="flex flex-col items-center py-3 space-y-2 text-gray-700 font-semibold">
              {navItems.map((item, i) => (
                <li key={i} className="w-full text-center">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === i ? null : i)
                    }
                    className="w-full py-2 hover:text-[#f47c20] flex justify-center items-center gap-1"
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === i ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {item.dropdown && activeDropdown === i && (
                    <ul className="bg-gray-50 rounded-md mx-4 mb-2">
                      {item.links.map((link, j) => (
                        <li
                          key={j}
                          className="py-2 text-sm hover:text-[#f47c20] cursor-pointer"
                          onClick={() => handleNavigation(link)} // ✅ Navigation click handler
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
