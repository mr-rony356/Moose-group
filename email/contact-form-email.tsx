import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  fullName: string;
  company: string;
  phone: string;
  senderEmail: string;
  message: string;
};

export default function ContactFormEmail({
  fullName,
  company,
  phone,
  senderEmail,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {fullName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New Contact Form Submission
              </Heading>
              <Text>
                <strong>Full Name:</strong> {fullName}
              </Text>
              <Text>
                <strong>Company:</strong> {company}
              </Text>
              <Text>
                <strong>Phone:</strong> {phone}
              </Text>
              <Text>
                <strong>Email:</strong> {senderEmail}
              </Text>
              <Hr />
              <Text>
                <strong>Comments:</strong>
              </Text>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
