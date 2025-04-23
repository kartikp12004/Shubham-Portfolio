"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";

const Contact = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  const [status, setStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const message = form.message.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setTimeout(() => {
        setEmailError("");
      }, 4000);
      return;
    } else {
      setEmailError("");
    }
    if (message.trim().length < 10) {
      setMessageError("Please enter atleast 10 characters.");
      setTimeout(() => {
        setMessageError("");
      }, 4000);
      return;
    } else {
      setMessageError("");
    }

    const formData = {
      access_key: "YOUR_ACCESS_KEY", //Replace this with your actual access key
      // 🔹 Step 1: Go to https://web3forms.com/
      // 🔹 Step 2: Click on "Create your Access Key" and generate your free access key
      // 🔹 Step 3: Copy the access key and paste it in place of "YOUR_ACCESS_KEY"

      email,
      message,
    };

    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setStatus(null);
    }, 4000);
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      className="bg-neutral-950 flex flex-col justify-center items-center text-neutral-100 py-16 px-6"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-300 font-medium"
      >
        GET IN TOUCH
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-100"
      >
        Contact Me
      </motion.h2>
      <div className="w-full sm:max-w-2xl md:max-w-3xl border border-neutral-600 p-4 md:p-8 rounded-2xl shadow-md text-neutral-100">
        <div className="flex max-md:flex-col sm:w-xl md:w-2xl gap-4">
          {/* 🔹 Replace "sample@gmail.com" at both places with your actual email address */}
          <motion.a
            href="mailto:sample@gmail.com"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.01 }}
          >
            <FiMail className="text-sm" /> sample@gmail.com
          </motion.a>

          {/* 🔹 Replace "1234567890" with your WhatsApp number */}
          <motion.a
            href="https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20working%20with%20you.%20Can%20we%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
            whileHover={{ scale: 1.01 }}
          >
            <FaWhatsapp className="text-sm" /> WhatsApp
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          className="p-6 text-neutral-300 text-xs font-medium text-center"
        >
          Or send a message
        </motion.p>

        <motion.form className="w-full space-y-4" onSubmit={handleSubmit}>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
              required
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </motion.div>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
          >
            <motion.textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none resize-none"
              required
            />
            {messageError && (
              <p className="text-red-500 text-xs">{messageError}</p>
            )}
          </motion.div>
          <motion.button
            type="submit"
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.01 }}
            className="w-full bg-neutral-950 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium border border-neutral-600 flex justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-blue-600">
            {status}
          </p>
        )}
      </div>
    </motion.section>
  );
});

Contact.displayName = "Contact";
export default Contact;
