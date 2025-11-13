import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useGetHeroSlidesQuery } from "../redux/allApi"; // ✅ your RTK endpoint

const HeroSection = () => {
  // ✅ Fetch slides data from backend
  const { data, isLoading, isError } = useGetHeroSlidesQuery();

  // ✅ Safe fallback (avoid undefined errors)
  const slides = data?.find(item => item.type === 'slides')?.data || [];
  const cards = data?.find(item => item.type === 'cards')?.data || [];
  const heroRemaining = data?.find(item => item.type === 'heroRemaining')?.data?.[0] || {};

  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(cards.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  // ✅ Auto-slide hero images
  useEffect(() => {
    if (!slides.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);


  // ✅ Handle loading/error
  if (isLoading) return <p className="text-white text-center py-10">Loading slides…</p>;
  if (isError) return <p className="text-red-500 text-center py-10">Error loading slides.</p>;
  if (!slides.length) return <p className="text-gray-400 text-center py-10">No slides found.</p>;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative md:mt-3 -mt-5">
        <div className="max-w-5xl mx-auto overflow-hidden md:rounded-3xl shadow-lg relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current]?._id || slides[current]?.img}
              src={slides[current]?.img}
              alt={slides[current]?.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-[80vh] sm:h-[320px] object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-center px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current]?._id || slides[current]?.title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <h2 className="text-white text-2xl font-semibold mb-4 top-6">
                  {slides[current]?.title}
                </h2>
                <p className="text-white text-sm mb-3 leading-relaxed">
                  {slides[current]?.desc}
                </p>
                <button className="bg-[#f47c20] text-white font-normal text-sm px-4 py-2 rounded-xl shadow-md hover:bg-orange-700 transition">
                  {slides[current]?.btn}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition ${current === idx ? "bg-white" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#f47c20] text-center mb-2">आंदोलनं व उपक्रम</h2>
          <div className="w-20 h-1 bg-[#f47c20] mx-auto mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            जनतेच्या अनेक प्रश्नांवर आंदोलनं हाती घेतली. निवेदनं, शिष्टमंडळांमार्फत संबंधितांपर्यंत
            लोकांच्या समस्या पोहचविल्या. प्रश्न तडिसे नेले. तसंच व्यवस्थेकडून प्रतिसाद न मिळाल्यास प्रसंगी
            टोकाचा संघर्षही केला.
          </p>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {(window.innerWidth < 640
                  ? cards.slice(currentIndex, currentIndex + 1)
                  : cards.slice(currentIndex * 3, currentIndex * 3 + 3)
                ).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 flex-1 mb-4">{item.desc}</p>
                    <a
                      href={item.link}
                      className="inline-block mt-auto bg-[#f47c20] text-white px-5 py-2 rounded-md hover:bg-orange-600 transition text-center"
                    >
                      {item.btn}
                    </a>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {heroRemaining.anthem && (
        <section className="bg-[#f5f5f5] md:py-12 px-4 sm:px-10 md:px-20 lg:px-40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f47c20] text-center mb-2">
              {heroRemaining.anthem.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#f47c20] mx-auto mb-8"></div>

            <div className="flex flex-col md:flex-row items-center bg-[#f47c20] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <div className="w-full md:w-1/3">
                <img
                  src={heroRemaining.anthem.img}
                  alt={heroRemaining.anthem.title}
                  className="object-cover w-full h-full md:h-auto"
                />
              </div>
              <div className="w-full md:w-2/3 p-5 sm:p-8 text-white flex flex-col justify-center text-center md:text-left">
                <audio
                  src={heroRemaining.anthem.audio}
                  controls
                  className="w-full mb-4 rounded-md"
                />
              </div>
            </div>

          </div>
        </section>
      )}

      {/* UPCOMING EVENT */}
      {heroRemaining.upcomingEvent && (
        <section className="py-12 bg-gray-100 pb-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#f47c20] mb-4">
              {heroRemaining.upcomingEvent.title}
            </h2>
            <div className="w-20 h-1 bg-[#f47c20] mx-auto mb-8"></div>
            <img
              src={heroRemaining.upcomingEvent.img}
              alt={heroRemaining.upcomingEvent.desc}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      )}

      {/* FOOTER SECTION */}
      {heroRemaining.footer && (
        <section className="w-full">
          <div className="relative w-full">
            <img
              src={heroRemaining.footer.background}
              alt="Section Background"
              className="w-full object-cover h-64"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <img
                src={heroRemaining.footer.logo}
                alt="Logo"
                className="w-20 mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                {heroRemaining.footer.text}
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
