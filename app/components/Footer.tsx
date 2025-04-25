import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
export default function Footer() {
  const socialLinks = [
    {
      icon: FaInstagram,
      alt: "Instagram",
      href: "https://www.instagram.com/moosegroupconsulting",
    },
    {
      icon: FaDribbble,
      alt: "Dribble",
      href: "https://www.dribble.com/moosegroupconsulting",
    },
    {
      icon: FaTwitter,
      alt: "Twitter",
      href: "https://www.twitter.com/moosegroupconsulting",
    },
    {
      icon: FaYoutube,
      alt: "Youtube",
      href: "https://www.youtube.com/moosegroupconsulting",
    },
  ];
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start justify-center">
            <Image
              src="/logo.svg"
              alt="Moose Group Logo"
              width={100}
              height={100}
              className="mb-4 w-[200px] sm:w-[250px] h-[40px] sm:h-[50px]"
            />
            <p className="text-sm text-center md:text-left">
              Copyright © 2020 Moose Group Consulting Inc. <br />
              All rights reserved.
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <link.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-[#F5F7FA]">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4 text-[20px]">Stay up to date</h3>
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors duration-200"
              />
              <button
                className="ml-[-40px] p-3 sm:p-4 text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Subscribe to newsletter"
              >
                <FaPaperPlane size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
