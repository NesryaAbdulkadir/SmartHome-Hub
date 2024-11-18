import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-screen flex flex-col items-center justify-center p-10 bg-white fixed top-0 z-50 left-0">
        {isOpen ? (
          <X
            onClick={() => setIsOpen(false)}
            className="cursor-pointer block sm:hidden"
            size={30}
          />
        ) : (
          <Menu
            onClick={() => setIsOpen(true)}
            className="cursor-pointer block sm:hidden"
            size={30}
          />
        )}
        {isOpen && (
          <ul className="flex flex-col gap-5 text-xl items-center  p-10">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="bg-blue-700 text-white py-2 px-4 rounded-lg max-w-max font-bold">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        )}

        <ul className="hidden sm:flex gap-5 text-xl items-center">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="bg-blue-700 text-white py-2 px-4 rounded-lg max-w-max font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
