import React, { useState } from "react";
import { Mail, GraduationCap } from "lucide-react";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "E-posta adresi gereklidir";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }
    if (!schoolName.trim()) {
      newErrors.schoolName = "Okul adı gereklidir";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onLogin(email, schoolName);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Öğrenci Asistanı
          </h1>
          <p className="text-gray-600">
            Akademik yolculuğunuzda size yardımcı olmak için buradayım
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta Adresi
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="ornek@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Okul Adı
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                  errors.schoolName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Üniversite/Okul adınızı giriniz"
              />
            </div>
            {errors.schoolName && (
              <p className="text-red-500 text-sm mt-1">{errors.schoolName}</p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Devam Et</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Giriş yaparak hizmet şartlarını kabul etmiş olursunuz
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
