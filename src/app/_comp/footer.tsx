import Wave from "@/components/custom/wave";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 md:py-14  relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-100" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Team
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Rosenberg Self-Esteem Scale
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Personality Assessments
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Mindfulness Exercises
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Coaching Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Webinars
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Guides
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-100" href="#">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm opacity-55 absolute left-1/2 -translate-x-1/2 bottom-2">
          <p>© 2024 by nesru.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
