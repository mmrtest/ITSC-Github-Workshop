<script setup lang="ts">
import { RouterLink } from "vue-router";
import {
  RocketIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  CheckIcon,
} from "lucide-vue-next";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-indigo-600">Commercia</span>
          </div>
          <div class="flex items-center space-x-4">
            <RouterLink
              to="/products"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Products</RouterLink
            >
            <RouterLink
              to="/about"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >About Us</RouterLink
            >
            <RouterLink
              to="/login"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Login</RouterLink
            >
            <RouterLink
              to="/register"
              class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >Register</RouterLink
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">Data to enrich your</span>
                <span class="block text-indigo-600 xl:inline"
                  >online business</span
                >
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Accelerate your growth with our comprehensive suite of tools
                designed to streamline your workflow and boost productivity.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <RouterLink
                    to="/register"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg"
                  >
                    Get started
                  </RouterLink>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <RouterLink
                    to="/products"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg"
                  >
                    Live demo
                  </RouterLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100 flex items-center justify-center"
      >
        <div class="text-red-600 flex flex-col items-center">
          <!-- Placeholder for hero image -->
          <svg
            class="h-64 w-64"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span class="text-xl font-medium">Change This Image</span>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Features
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-4xl"
          >
            Try Change the Color This Text
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides powerful features to help you manage your
            business effectively.
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"
          >
            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <RocketIcon class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Fast Deployment
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Deploy your applications in seconds with our optimized
                infrastructure.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <ShieldCheckIcon class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Secure by Design
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Enterprise-grade security features to protect your data and
                privacy.
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <BarChart3Icon class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Real-time Analytics
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Monitor your business performance with detailed real-time
                analytics.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="bg-indigo-900">
      <div class="pt-12 sm:pt-16 lg:pt-24">
        <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2
              class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider"
            >
              Pricing
            </h2>
            <p
              class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            >
              The right price for you, whoever you are
            </p>
            <p class="text-xl text-gray-300">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-indigo-900"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
            >
              <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Standard Plan
                </h3>
                <p class="mt-6 text-base text-gray-500">
                  Ideal for small businesses just getting started. Includes
                  basic analytics and support.
                </p>
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                    >
                      What's included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200"></div>
                  </div>
                  <ul
                    role="list"
                    class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <CheckIcon
                          class="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        Public beta access
                      </p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <CheckIcon
                          class="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="ml-3 text-sm text-gray-700">Email support</p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <CheckIcon
                          class="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="ml-3 text-sm text-gray-700">Basic analytics</p>
                    </li>
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <CheckIcon
                          class="h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        Help center access
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
              >
                <p class="text-lg leading-6 font-medium text-red-600">
                  Change this text to your price
                </p>
                <div
                  class="mt-4 flex items-center justify-center text-5xl font-extrabold text-red-600"
                >
                  <span>$XXX</span>
                  <span class="ml-3 text-xl font-medium text-gray-500"
                    >USD</span
                  >
                </div>
                <div class="mt-6">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <bg class="bg-white">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <!-- Social icons could go here -->
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">
            &copy; 2024 Commercia, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </bg>
  </div>
</template>
