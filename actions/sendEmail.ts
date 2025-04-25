"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const fullName = formData.get("fullName");
  const company = formData.get("company");
  const phone = formData.get("phone");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(fullName, 100)) {
    return {
      error: "Invalid full name",
    };
  }
  if (!validateString(company, 100)) {
    return {
      error: "Invalid company name",
    };
  }
  if (!validateString(phone, 20)) {
    return {
      error: "Invalid phone number",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const emailHtml = render(
      React.createElement(ContactFormEmail, {
        fullName: fullName as string,
        company: company as string,
        phone: phone as string,
        senderEmail: senderEmail as string,
        message: message as string,
      })
    );

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "alex.english.fl259@gmail.com",
      subject: `New Contact Form Submission from ${fullName}`,
      reply_to: senderEmail as string,
      html: emailHtml,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
