"use client";

import { useState, useEffect } from "react";
import MainNavigation from "@/components/sections/main-navigation";

// Move FloatingInput outside the main component to prevent re-creation
const FloatingInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  multiline = false,
  focusedField,
  setFocusedField,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
  focusedField: string;
  setFocusedField: (field: string) => void;
}) => {
  const isFocused = focusedField === id;
  const hasValue = value.length > 0;

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#E81863]/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 transition-all duration-700 ${
          isFocused
            ? "opacity-100 scale-110"
            : "group-hover:opacity-50 group-hover:scale-105"
        }`}
      />

      {/* Main container */}
      <div
        className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border transition-all duration-500 overflow-hidden ${
          isFocused
            ? "border-[#E81863]/50 shadow-2xl shadow-[#E81863]/20 scale-105"
            : "border-white/20 hover:border-white/30"
        }`}
      >
        {/* Animated border */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
            isFocused
              ? "bg-gradient-to-r from-[#E81863]/20 via-purple-500/20 to-blue-500/20 animate-pulse"
              : ""
          }`}
        />

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <path
              d="M10,10 L50,10 L50,30 L90,30 L90,50 L130,50 L130,70 L170,70"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className={`transition-all duration-500 ${
                isFocused ? "stroke-[#E81863]" : "stroke-white/30"
              }`}
            />
            <circle
              cx="50"
              cy="10"
              r="2"
              className={`transition-all duration-500 ${
                isFocused ? "fill-[#E81863]" : "fill-white/30"
              }`}
            />
            <circle
              cx="90"
              cy="30"
              r="2"
              className={`transition-all duration-500 ${
                isFocused ? "fill-[#E81863]" : "fill-white/30"
              }`}
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Floating label */}
          <label
            htmlFor={id}
            className={`absolute font-bold transition-all duration-300 pointer-events-none ${
              isFocused || hasValue
                ? "top-4 left-4 text-xs text-[#E81863] transform -translate-y-2"
                : "top-6 left-6 text-white/60"
            }`}
          >
            {label} {required && <span className="text-[#E81863]">*</span>}
          </label>

          {/* Input field */}
          <InputComponent
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocusedField(id)}
            onBlur={() => setFocusedField("")}
            placeholder={isFocused ? placeholder : ""}
            required={required}
            rows={multiline ? 4 : undefined}
            className={`w-full bg-transparent text-white placeholder-white/40 border-none outline-none font-medium transition-all duration-300 resize-none ${
              multiline ? "pt-8 pb-2" : "pt-8 pb-2"
            }`}
          />

          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent">
            <div
              className={`h-full bg-gradient-to-r from-[#E81863] via-purple-500 to-blue-500 transition-all duration-500 ${
                isFocused ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Floating particles on focus */}
      {isFocused && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#E81863] rounded-full animate-ping"
              style={{
                left: `${20 + i * 12}%`,
                top: `${10 + (i % 2) * 80}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Handle HTTP error responses
        const errorData = await response.json().catch(() => ({}));
        setError(
          errorData.message ||
            `Failed to send message (${response.status}). Please try again or contact us directly.`,
        );
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
      setError(
        "Unable to send message. Please check your internet connection and try again, or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const BudgetSelector = () => {
    const budgets = [
      "< $5K",
      "$5K - $15K",
      "$15K - $50K",
      "$50K - $100K",
      "$100K+",
      "Let's Discuss",
    ];

    return (
      <div className="space-y-4">
        <label className="block text-white/80 font-bold mb-4">
          Project Budget <span className="text-[#E81863]">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => handleInputChange("budget", budget)}
              className={`relative group p-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                formData.budget === budget
                  ? "bg-gradient-to-r from-[#E81863] to-pink-600 text-white scale-105 shadow-xl shadow-[#E81863]/30"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/20 hover:border-white/30"
              }`}
            >
              {/* Animated background for selected state */}
              {formData.budget === budget && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
              )}

              <span className="relative z-10">{budget}</span>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-[#E81863]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                  formData.budget === budget ? "animate-pulse" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        {/* Success Animation */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#E81863] to-pink-600 rounded-full flex items-center justify-center animate-pulse">
              <svg
                className="w-16 h-16 text-white animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E81863]/20 to-pink-600/20 rounded-full blur-2xl animate-ping" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            MESSAGE RECEIVED!
          </h1>
          <p className="text-xl text-neutral-400 mb-8">
            Thank you. I will read your message and get back to you within 24
            hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                project: "",
                budget: "",
                message: "",
              });
              setFocusedField("");
              setError("");
            }}
            className="px-8 py-4 bg-gradient-to-r from-[#E81863] to-pink-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900" />

        {/* Laboratory Equipment Silhouettes */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-10 w-32 h-32 border-4 border-[#E81863] rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div className="absolute top-40 right-20 w-24 h-48 border-4 border-white/20 rounded-full animate-pulse" />
          <div
            className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-[#E81863]/20 to-purple-500/20 rounded-lg animate-bounce"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Dynamic Cursor Glow */}
        <div
          className="absolute w-96 h-96 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background:
              "radial-gradient(circle, rgba(232, 24, 99, 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#E81863] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(232,24,99,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,24,99,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Header */}
      <MainNavigation />

      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent block mb-4">
                CONTACT THE
              </span>
              <span className="text-[#E81863] block">MAD SCIENTIST</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Want to work with me? Are you absolutely sure? Amazing! Let's do
              it!
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-red-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 animate-pulse" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">
                      Oops! Something went wrong
                    </h3>
                    <p className="text-white/80">{error}</p>
                  </div>
                  <button
                    onClick={() => setError("")}
                    className="flex-shrink-0 ml-auto text-white/60 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Field */}
              <FloatingInput
                id="name"
                label="Your Name"
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                placeholder="Spartacus"
                required
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />

              {/* Email Field */}
              <FloatingInput
                id="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                placeholder="iamspartacus@gladiators.me"
                required
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
            </div>

            {/* Company Field */}
            <FloatingInput
              id="company"
              label="Company/Organization"
              value={formData.company}
              onChange={(value) => handleInputChange("company", value)}
              placeholder="Rome and Co.lloseum"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />

            {/* Project Type */}
            <FloatingInput
              id="project"
              label="Project Type"
              value={formData.project}
              onChange={(value) => handleInputChange("project", value)}
              placeholder="Web App, Mobile App, E-commerce, SaaS Platform..."
              required
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />

            {/* Budget Selector */}
            <BudgetSelector />

            {/* Message Field */}
            <FloatingInput
              id="message"
              label="Project Description"
              value={formData.message}
              onChange={(value) => handleInputChange("message", value)}
              placeholder="What's on your mind? Not in general, just regarding your project..."
              multiline
              required
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  formData.name.length < 3 ||
                  formData.email.length < 6 ||
                  formData.message.length < 20
                }
                className="group relative px-12 py-6 bg-gradient-to-r from-[#E81863] via-pink-600 to-purple-600 text-white font-black text-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Submit animation */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                )}

                <span className="relative z-10 flex items-center gap-4">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending to the lab...
                    </>
                  ) : (
                    <>🧪 Send it to the lab!</>
                  )}
                </span>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#E81863]/20 via-pink-600/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </button>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white/80">
              Or reach us the old fashioned way:
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:hello@madstonedev.com"
                className="flex items-center gap-4 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-[#E81863]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  📫
                </div>
                <span className="text-white font-medium">
                  hello@madstonedev.com
                </span>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-[#E81863]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  📞
                </div>
                <span className="text-white font-medium">+61 426 238 272</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}
