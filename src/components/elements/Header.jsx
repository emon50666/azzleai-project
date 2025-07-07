import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const menuItems = [
  {
    label: "Demo",
    link: "/",
    children: [
      { label: "home 01", link: "/" },
      { label: "home 02", link: "/home-2" },
      { label: "home 03", link: "/home-3" },
      { label: "home 04", link: "/home-4" },
    ],
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Services",
    link: "/",
    children: [
      { label: "Services", link: "/services" },
      { label: "Service Details", link: "/service-details" },
    ],
  },
  {
    label: "Pages",
    link: "/",
    children: [
      {
        label: "Blogs",
        children: [
          { label: "blogs", link: "/blog" },
          { label: "blog details", link: "/blog-details" },
        ],
      },
      {
        label: "Team",
        children: [
          { label: "Team", link: "/team" },
          { label: "Team Details", link: "/team-details" },
        ],
      },
      {
        label: "FAQ",
        children: [
          { label: "FAQ-1", link: "/faq-1" },
          { label: "FAQ-2", link: "/faq-2" },
        ],
      },
      {
        label: "Portfolio",
        children: [
          { label: "Portfolio", link: "/portfolio" },
          { label: "Portfolio Details", link: "/portfolio-details" },
        ],
      },
      { label: "Pricing", link: "/pricing" },
      {
        label: "Utilities",
        children: [
          { label: "Error 404", link: "/error-404" },
          { label: "Login", link: "/login" },
          { label: "Signup", link: "/signup" },
          { label: "Reset Password", link: "/reset-password" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderMenu = (items, depth = 0) => (
    <ul
      className={`${depth > 0 ? "ml-4" : "flex gap-6"} ${
        depth > 0 && "flex-col"
      } `}
    >
      {items.map((item, index) => (
        <li key={index} className="relative group">
          {item.link ? (
            <Link
              to={item.link}
              className="flex items-center gap-1 hover:text-[#2C8FED]"
            >
              {item.label}
              {item.children && <ChevronRight className="w-4 h-4 ml-1" />}
            </Link>
          ) : (
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#2C8FED]">
              {item.label}
              {item.children && <ChevronRight className="w-4 h-4 ml-1" />}
            </span>
          )}
          {item.children && (
            <div
              className={`absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-4 z-10 min-w-[180px]`}
            >
              {renderMenu(item.children, depth + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header className="site-header site-header--absolute is--white py-3 border-b bg-white">
      <MaxWidthWrapper>
        <div className="global-container flex items-center justify-between">
          <Link to="/">
            <img src="/logo.png" alt="AIMass" width="96" height="24" />
          </Link>
          <nav className="hidden lg:block">{renderMenu(menuItems)}</nav>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden lg:inline-block border px-4 py-2 rounded-full"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hidden lg:inline-block bg-black text-white px-4 py-2 rounded-full"
            >
              Sign up free
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden"
            >
              <span className="w-6 h-6 bg-gray-800 block"></span>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              {renderMenu(menuItems)}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
