"use client";

import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { useRef } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="font-sans bg-white text-black flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl">Contact Us</h1>
      <section id="contact" className="py-8 px-6 w-full max-w-3xl mx-auto">
        <form
          ref={formRef}
          className="mt-5 flex flex-col dark:text-black space-y-4 w-full"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
            formRef.current?.reset();
          }}
        >
          <div className="w-full">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full border p-3 rounded-xl border-black"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="w-full border p-3 rounded-xl border-black"
            />
          </div>
          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="w-full border p-3 rounded-xl border-black"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="senderEmail"
              placeholder="Email"
              required
              className="w-full border p-3 rounded-xl border-black"
            />
          </div>
          <div className="w-full">
            <textarea
              name="message"
              placeholder="Comments"
              rows={5}
              required
              className="w-full border p-3 rounded-xl border-black"
            ></textarea>
          </div>
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="consent"
              required
              className="w-5 h-5 accent-[#2E7D32] rounded cursor-pointer"
            />
            <label className="text-sm text-gray-600 leading-snug">
              By submitting this form, I understand that Moose Group may contact me with 
              offers and information about their products and services.
            </label>
          </div>
          <button
            type="submit"
            className="w-[25%] bg-[#2E7D32] text-white py-3 px-6 rounded-xl"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
