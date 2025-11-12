import React from "react";

const Complaint = () => {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border-t-8 border-orange-600 p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          तक्रार नोंदणी फॉर्म
        </h2>
        <p className="text-center text-gray-700 mb-8">
          आपल्या समस्या, अडचणी किंवा स्थानिक प्रश्न आमच्यापर्यंत पोहोचवा. 
          महाराष्ट्र नवनिर्माण सेनेच्या माध्यमातून तुमची तक्रार संबंधित अधिकाऱ्यांपर्यंत पोहोचवली जाईल.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              पूर्ण नाव
            </label>
            <input
              type="text"
              placeholder="आपले पूर्ण नाव लिहा"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              मोबाईल क्रमांक
            </label>
            <input
              type="tel"
              placeholder="१० अंकी मोबाईल क्रमांक"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              पत्ता / गावाचे नाव
            </label>
            <input
              type="text"
              placeholder="आपला पत्ता किंवा गावाचे नाव लिहा"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              तक्रारीचा प्रकार
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            >
              <option value="">तक्रार निवडा</option>
              <option>स्थानिक सुविधा</option>
              <option>रस्ते / पाणी / वीज</option>
              <option>प्रशासन / शासन</option>
              <option>न्याय / अन्याय / छळ</option>
              <option>इतर</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              तक्रारीचे तपशील
            </label>
            <textarea
              rows="5"
              placeholder="आपली तक्रार येथे लिहा..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              तक्रार नोंदवा
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
