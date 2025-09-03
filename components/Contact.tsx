"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { contactLinks } from "@/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    // You can integrate with Formspree, Netlify, or your own backend here.
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <section id="contact" className="bg-[#111218] text-white">
      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500">
            Get in Touch
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 mb-10">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              title={contact.name}
              className="flex items-center justify-center p-4 bg-gray-800 rounded-lg hover:scale-110 hover:text-blue-400 transition-all"
            >
              <Image src={contact.icon} alt={contact.name} width={30} height={30} />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center text-green-400">
              <h3 className="text-2xl font-bold">Thank you!</h3>
              <p>Your message has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </section>
  ) : null;
};

export default Contact;
