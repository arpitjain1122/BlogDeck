import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_nxw5an9", // Replace with your service ID
        "template_rukvh0r", // Create a new template for subscription
        { email: email, to_email: "arpitjain.jain06@gmail.com" },
        "U-J128vJczfByaoXP" // Your public key
      )
      .then(() => {
        setLoading(false);
        alert("Subscribed successfully! Thank you.");
        setEmail("");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Subscription failed. Please try again.");
      });
  };
  return (
    <div className="bg-[rgb(137,80,80)]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col mt-4 md:flex-row"
            >
              <input
                placeholder="Email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md border hover:bg-orange-500 focus:shadow-outline focus:outline-none"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            <p className="mt-4 text-sm text-[rgb(27 46 76)]">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-[rgb(27 46 76)]">
            © Copyright 2024 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="text-[rgb(27 46 76)] transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
