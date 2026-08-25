import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-950 text-gray-300">
      <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <a href="#" class="text-2xl font-bold text-white">Nova</a>
            <p class="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Building simple, modern and powerful digital experiences for everyone.
            </p>

            <div class="mt-6 flex gap-4">
              <a href="#" class="text-gray-400 transition hover:text-white">Facebook</a>
              <a href="#" class="text-gray-400 transition hover:text-white">Twitter</a>
              <a href="#" class="text-gray-400 transition hover:text-white">Instagram</a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul class="mt-4 space-y-3 text-sm">
              <li><a href="#" class="transition hover:text-white">About Us</a></li>
              <li><a href="#" class="transition hover:text-white">Our Team</a></li>
              <li><a href="#" class="transition hover:text-white">Careers</a></li>
              <li><a href="#" class="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul class="mt-4 space-y-3 text-sm">
              <li><a href="#" class="transition hover:text-white">Blog</a></li>
              <li><a href="#" class="transition hover:text-white">Documentation</a></li>
              <li><a href="#" class="transition hover:text-white">Help Center</a></li>
              <li><a href="#" class="transition hover:text-white">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p class="mt-4 text-sm text-gray-400">
              Subscribe for news, updates and special offers.
            </p>

            <form class="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                class="rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-indigo-500"
              />

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div class="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm text-gray-500">
            © 2026 Nova. All rights reserved.
          </p>

          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-500 transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-500 transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" class="text-gray-500 transition hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer