import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import om1 from "/mnsadhikrut-banner-04.jpg";
import om2 from "/raj-thackeray-sabha-pic1-e1626091623289.jpg";
import om3 from "/MG_5805-1-scaled-e1594411061318.jpg"
import om4 from "/StdZbJsdxJJkdCr9Y4PvLN.jpg"
import om5 from "/jagar-marathicha-thumb.jpg"
import om6 from "/815130-raj-thackeray-dna-05.jpg"
import om7 from "/devpresent-thumb-1.jpg"
import om8 from "/aarevachva-thumb.jpg"
import om9 from "/festival-slider-thumb02.jpg"
import om10 from "/students-agitations-thumb.jpg"
import om11 from "/samajik-upkram-thumb.jpg"
import om12 from "/mahamorcha-thumb.jpg"
import om13 from "/pakartistban-thumb.jpg"
import om14 from "/crisis-help-thumb.jpg"
import a from "/337153044_174537195432675_6885634445090099425_n.jpg"
import o from "/gudhipadwa-melava-design-2024-v7.png"
import K from "/raj-thackeray-speech-pic.jpg"
import L from "/mns-symbol-railway-engine-white.png"



const slides = [
  {
    title: "आम्ही काय केलं.",
    desc: "जेंव्हा महाराष्ट्राधर्मावर संकट आलं तेंव्हा आम्ही संघर्ष केला, तुरुंगवास सोसला. तरीही जेंव्हा महाराष्ट्र नवनिर्माण सेनेने काय केलं? तुम्ही आंदोलनं अर्धवट सोडली असं काही मूठभर म्हणतात, तेंव्हा त्रास होतो. त्या अपप्रचाराला उत्तर आणि माझ्या महाराष्ट्रातील जनतेला सादर केलेला अहवाल.",
    btn: "माहिती पुस्तिका",
  },
  {
    title: "विचार महाराष्ट्र धर्माचा, निर्धार हिंदवी स्वराज्याचा !",
    desc: "शिवछत्रपतींच्या रूपाने सह्याद्रीच्या कड्याकपारीतून उगवलेल्या क्रांतिसूर्याने दास्यत्वाने पिचलेल्या मनांना उभारी दिली.",
    btn: "प्रमुख भूमिका",
  },
  {
    title: "मी महाराष्ट्राचा, महाराष्ट्र माझा!",
    desc: "अखंड महाराष्ट्राशी एकरूप झालेल्या प्रत्येकाच्या समृद्धीसाठी आणि पुर्नउत्थानासाठी महाराष्ट्र नवनिर्माण सेना कटिबद्ध.",
    btn: "ध्येयं-धोरणं",
  },
  {
    title: "जंगलं नसतील तर काय करणार?",
    desc: "आता जर काही पुढच्या पिढ्यांसाठी ठेवून जायचं असेल तर जंगलं टिकवायला हवीत,शालेय जीवनापासून मुलांवर जंगल संवर्धनाचे संस्कार व्हायला हवेत, देशात पर्यावरणपूरक राजकारण व्हायला हवं.",
    btn: "संपूर्ण लेख वाचा",
  },
];

const HeroSection = () => {


  const [current, setCurrent] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      title: "जागर मराठीचा",
      desc: "भाषावार प्रांतरचना केल्यानंतर देशातील घटनेनेच त्या त्या राज्यात, त्या राज्याची राजभाषा अग्रक्रमाने वापरली पाहिजे असे नमूद केले आहे.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "भूमिपुत्रांच्या रोजगारासाठी",
      desc: "महाराष्ट्रात निर्माण होणाऱ्या रोजगारावर, व्यवसायाच्या संधींवर सर्वप्रथम मराठी माणसांचाच अधिकार असायला हवा, हा पक्षाचा प्रमुख आग्रह आहे.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "विकासाचं सादरीकरण",
      desc: "राजसाहेबांनी महाराष्ट्र नवनिर्माण सेनेच्या स्थापनेच्या सभेत जाहीर केलं होतं की, मला आजवर महाराष्ट्रात केलं गेलेलं पारंपरिक राजकारण करायचं नाही.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "नागरी आंदोलनं",
      desc: "वाढत्या शहरीकरणाच्या पार्श्वभूमीवर शहराचा सर्वांगीण विचार करून पायाभूत सुविधा उभ्या करण्यावर, त्यासाठी संघर्ष करण्यावर आमचा भर असतो.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "मराठी मनांसाठी, हिंदू सणांसाठी",
      desc: "आमच्या भावनांचा विचार न करता, सहिष्णुतेची सबब पुढे करून आमच्या सणांवर गंडांतर येणार असेल तर आम्ही ते मान्य करणार नाही.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "विद्यार्थी आंदोलनं",
      desc: "राज्यातील विविध भागातील अनेक संस्थाचालकांनी शिक्षणाचं जो बाजार मांडला होता त्याला पहिला दणका दिला तो महाराष्ट्र नवनिर्माण विद्यार्थी सेनेने.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "समाजाभिमुख उपक्रम",
      desc: "आमचा प्रत्येक महाराष्ट्र सैनिक जनतेला आधार वाटला पाहिजे. राजकारणापलीकडेही जनतेशी बांधिलकी आहे , हाच त्या समाजकारणामागचा हेतू असतो.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "महामोर्चा",
      desc: "एखाद्या मुद्द्यावर, प्रश्नावर जनमत किती तीव्र आहे ह्याची जाणीव व्हावी ह्यासाठी महाराष्ट्र नवनिर्माण सेनेनेही पक्ष स्थापनेपासून राज्यव्यापी मोर्चे काढले.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "पाकिस्तानी कलाकारांना हुसकावले!",
      desc: "‘नापाक’ देशातील कलाकारांना भारतात का बोलावले जाते? ह्या नीतीवंत भारतात सरस कलावंत असतानाही पाकड्यांना आवताण का?",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "आपत्तीतलं मदतकार्य",
      desc: "महाराष्ट्रावर, महाराष्ट्र धर्मावर जेव्हा जेव्हा संकट येईल तेव्हा महाराष्ट्र नवनिर्माण सेना सर्वात आधी त्या संकटासमोर उभी ठाकणार.",
      btn: "पुढे वाचा",
      link: "#"
    },
    {
      title: "आपत्तीतलं मदतकार्य",
      desc: "महाराष्ट्रावर, महाराष्ट्र धर्मावर जेव्हा जेव्हा संकट येईल तेव्हा महाराष्ट्र नवनिर्माण सेना सर्वात आधी त्या संकटासमोर उभी ठाकणार.",
      btn: "पुढे वाचा",
      link: "#"
    }
  ];

  const slideImages = [om1, om2, om3, om4];
  const cardImages = [om5, om6, om7, om8, om9, om10, om11, om12, om13, om14];
  const currentImage = slideImages[current];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(cardsData.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // if (isLoading) {
  //   return <div>Loading slides…</div>;
  // }

  // if (error) {
  //   return <div>Error fetching slides</div>;
  // }

  return (
    <>
      <section className="relative md:mt-3 -mt-5">
        <div className="max-w-5xl mx-auto overflow-hidden md:rounded-3xl shadow-lg relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={slides[current].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-[80vh] sm:h-[320px] object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-center px-6">
            <AnimatePresence mode="wait" >
              <motion.div
                key={slides[current].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <h2 className="text-white text-2xl font-semibold mb-4 top-6">
                  {slides[current].title}
                </h2>
                <p className="text-white text-sm mb-3 leading-relaxed">
                  {slides[current].desc}
                </p>
                <button className="bg-[#f47c20] text-white font-normal text-sm px-4 py-2 rounded-xl shadow-md hover:bg-orange-700 transition">
                  {slides[current].btn}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

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
          <h2 className="text-3xl font-bold text-[#f47c20] text-center mb-2">
            आंदोलनं व उपक्रम
          </h2>
          <div className="w-20 h-1 bg-[#f47c20] mx-auto mb-6"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            जनतेच्या अनेक प्रश्नांवर आंदोलनं हाती घेतली. निवेदनं, शिष्टमंडळांमार्फत संबंधितांपर्यंत लोकांच्या समस्या पोहचविल्या. प्रश्न तडिसे नेले. तसंच व्यवस्थेकडून प्रतिसाद न मिळाल्यास प्रसंगी टोकाचा संघर्षही केला.
          </p>

          {/* Cards Auto-Sliding Section */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          "
              >
                {/** ✅ MOBILE = 1 CARD ONLY */}
                {/** ✅ DESKTOP = 3 CARDS */}
                {/** ✅ TABLET = 2 CARDS */}

                {(window.innerWidth < 640
                  ? cardsData.slice(currentIndex, currentIndex + 1)   // 1 card for mobile
                  : cardsData.slice(currentIndex * 3, currentIndex * 3 + 3) // 3 cards for desktop
                ).map((item, idx) => {
                  const imgSrc = cardImages[
                    (window.innerWidth < 640
                      ? currentIndex
                      : currentIndex * 3) + idx
                  ];

                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col"
                    >
                      <img
                        src={imgSrc}
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
                  );
                })}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ✅ Dots for mobile — one dot per card */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: window.innerWidth < 640
                ? cardsData.length       // mobile — each card has a dot
                : Math.ceil(cardsData.length / 3)  // desktop 1 dot per slide group
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition 
            ${currentIndex === idx ? "bg-[#f47c20]" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] md:py-12 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f47c20] text-center mb-2">
            महाराष्ट्र नवनिर्माण सेनेचं स्मृतिगीत
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#f47c20] mx-auto mb-8"></div>

          {/* Responsive container */}
          <div className="flex flex-col md:flex-row items-center bg-[#f47c20] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
            {/* Image section */}
            <div className="w-full md:w-1/3">
              <img
                src={a}
                alt="anthem image"
                className="object-cover w-full h-full md:h-auto"
              />
            </div>

            {/* Text + Audio section */}
            <div className="w-full md:w-2/3 p-5 sm:p-8 text-white flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                नवनिर्माण घडवूया !
              </h3>

              <audio
                src={a}
                controls
                className="w-full mb-4 rounded-md"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <a
              download
              className="border-2 border-[#f47c20] text-[#f47c20] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-normal text-base hover:bg-[#f47c20] hover:text-white transition"
            >
              संकलित करा (Download)
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#f47c20] mb-4">
            पुढील कार्यक्रम
          </h2>
          <div className="w-20 h-1 bg-[#f47c20] mx-auto mb-8"></div>
          <img
            src={o}
            alt="वर्णन इथे"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="w-full ">
        <div className="relative w-full">
          <img
            src={K}
            alt="Section Background"
            className="w-full object-cover h-64"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <img
              src={L}
              alt="Logo"
              className="w-20 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">
              महाराष्ट्र नवनिर्माण सेनेची अधिकृत सामाजिक माध्यमं
            </h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-[#f47c20] hover:bg-orange-600 p-3 rounded-full transition">
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="bg-[#f47c20] hover:bg-orange-600 p-3 rounded-full transition">
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="bg-[#f47c20] hover:bg-orange-600 p-3 rounded-full transition">
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="bg-[#f47c20] hover:bg-orange-600 p-3 rounded-full transition">
                <FaYoutube className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
