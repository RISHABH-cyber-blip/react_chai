import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
  <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <Link to="/" className="text-2xl font-bold text-white">
          Nova
        </Link>
        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
          Building simple, modern and powerful digital experiences for everyone.
        </p>
        <div className="mt-6 flex gap-4">
          <Link to="/facebook" className="text-gray-400 transition hover:text-white">
            Facebook
          </Link>
          <Link to="/twitter" className="text-gray-400 transition hover:text-white">
            Twitter
          </Link>
          <Link to="/instagram" className="text-gray-400 transition hover:text-white">
            Instagram
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          Company
        </h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li><Link to="/about" className="transition hover:text-white">About Us</Link></li>
          <li><Link to="/team" className="transition hover:text-white">Our Team</Link></li>
          <li><Link to="/careers" className="transition hover:text-white">Careers</Link></li>
          <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          Resources
        </h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li><Link to="/blog" className="transition hover:text-white">Blog</Link></li>
          <li><Link to="/docs" className="transition hover:text-white">Documentation</Link></li>
          <li><Link to="/help" className="transition hover:text-white">Help Center</Link></li>
          <li><Link to="/community" className="transition hover:text-white">Community</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          Stay Updated
        </h3>
        <p className="mt-4 text-sm text-gray-400">
          Subscribe for news, updates and special offers.
        </p>
        <form className="mt-5 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-500">
        © 2026 Nova. All rights reserved.
      </p>

      <div className="flex gap-6 text-sm">
        <Link to="/privacy" className="text-gray-500 transition hover:text-white">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-gray-500 transition hover:text-white">
          Terms of Service
        </Link>
        <Link to="/cookies" className="text-gray-500 transition hover:text-white">
          Cookies
        </Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer