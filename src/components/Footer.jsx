const quickLinks = [
  "About Us",
  "Pricing Table",
  "Contact Us",
  "Meet Our Team",
  "Latest News",
];

const companyLinks = ["Case Studies", "FAQ’s", "Services", "Customer Support"];

const legalLinks = ["Privacy Policy", "Terms of Use"];

function Footer() {
  return (
    <footer className="bg-black text-white px-12">
      <div className="grid grid-cols-12 lg:gap-10">
        <div className="col-span-12 md:col-span-3 py-10">
          <img src="/logo.svg" />

          <div className="flex gap-4 my-3">
            <img src="/social-icons/behance.svg" className="w-[20px] h-[20px]" />
            <img src="/social-icons/dribble.svg" className="w-[20px] h-[20px]" />
            <img src="/social-icons/insta.svg" className="w-[20px] h-[20px]" />
            <img src="/social-icons/linkedin.svg" className="w-[20px] h-[20px]" />
            <img src="/social-icons/x.svg" className="w-[20px] h-[20px]" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 py-10">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center p-2 text-white rounded-lg group">
              Quick Links
            </li>

            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center px-2 text-gray-400 text-grey text-sm group"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3 py-10">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center p-2 text-white rounded-lg group">
              Company
            </li>

            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center px-2 text-gray-400 text-grey text-sm group"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3 py-10">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center p-2 text-white rounded-lg group">
              Legal
            </li>

            {legalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center px-2 text-gray-400 text-grey text-sm group"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      <div className="text-center text-xs text-gray-400 pb-5">
        @ 2023 Web Olympus. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
