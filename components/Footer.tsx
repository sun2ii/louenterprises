import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-gray-100 py-16 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-1">
            <a
              href="mailto:hello@louenterprises.com"
              className="block text-lg md:text-xl text-black hover:text-cyan transition-colors cursor-pointer font-semibold"
            >
              hello@louenterprises.com
            </a>
            <a
              href="tel:+33786410557"
              className="block text-lg md:text-xl text-black hover:text-cyan transition-colors cursor-pointer font-semibold"
            >
              +33 7 86 41 05 57
            </a>
          </div>

          {/* Headquarters */}
          <div>
            <h3 className="text-lg md:text-xl text-black mb-3 font-semibold">/Headquarters</h3>
            <div className="space-y-1 text-lg md:text-xl text-black font-normal">
              <p>Sofia</p>
              <p>Republic of Bulgaria</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg md:text-xl text-black mb-3 font-semibold">/Social</h3>
            <div className="space-y-1 text-lg md:text-xl">
              <a
                href="https://www.linkedin.com/in/louis-comhaire-66b8bb218"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black hover:text-cyan transition-colors cursor-pointer font-normal"
              >
                Linkedin
              </a>
              <a
                href="https://www.instagram.com/loucanette"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-black hover:text-cyan transition-colors cursor-pointer font-normal"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg md:text-xl text-black mb-3 font-semibold">/Nav</h3>
            <div className="space-y-1 text-lg md:text-xl">
              <Link
                href="/"
                className="block text-black hover:text-cyan transition-colors cursor-pointer font-normal"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-black hover:text-cyan transition-colors cursor-pointer font-normal"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-black hover:text-cyan transition-colors cursor-pointer font-normal"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
