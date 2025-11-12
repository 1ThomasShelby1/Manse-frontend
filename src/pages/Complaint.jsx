// src/components/Complaint.jsx
import React, { useState } from "react";
import { useSubmitComplaintMutation } from "../redux/AllApi";

const Complaint = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    complaintType: "",
    details: "",
  });

  const [submitComplaint, { isLoading, isSuccess, isError, error }] =
    useSubmitComplaintMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitComplaint(formData).unwrap();
      alert("तक्रार यशस्वीरित्या नोंदवली गेली आहे");
      setFormData({
        fullName: "",
        mobileNumber: "",
        address: "",
        complaintType: "",
        details: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      alert("त्रुटी: तक्रार नोंदवता आली नाही");
    }
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border-t-8 border-orange-600 p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          तक्रार नोंदणी फॉर्म
        </h2>
        <p className="text-center text-gray-700 mb-8">
          आपल्या समस्या, अडचणी किंवा स्थानिक प्रश्न आमच्यापर्यंत पोहोचवा. महाराष्ट्र
          नवनिर्माण सेनेच्या माध्यमातून तुमची तक्रार संबंधित अधिकाऱ्यांपर्यंत
          पोहोचवली जाईल.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              पूर्ण नाव
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
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
              name="address"
              value={formData.address}
              onChange={handleChange}
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
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            >
              <option value="">तक्रार निवडा</option>
              <option value="स्थानिक सुविधा">स्थानिक सुविधा</option>
              <option value="रस्ते / पाणी / वीज">रस्ते / पाणी / वीज</option>
              <option value="प्रशासन / शासन">प्रशासन / शासन</option>
              <option value="न्याय / अन्याय / छळ">न्याय / अन्याय / छळ</option>
              <option value="इतर">इतर</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              तक्रारीचे तपशील
            </label>
            <textarea
              name="details"
              rows="5"
              value={formData.details}
              onChange={handleChange}
              placeholder="आपली तक्रार येथे लिहा..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? "सबमिट करत आहे..." : "तक्रार नोंदवा"}
            </button>
          </div>
        </form>

        {isError && (
          <p className="text-red-600 mt-4">त्रुटी: {error?.data?.message || error?.error}</p>
        )}
        {isSuccess && (
          <p className="text-green-600 mt-4">तक्रार यशस्वीरित्या नोंदवली गेली आहे.</p>
        )}
      </div>
    </div>
  );
};

export default Complaint;
