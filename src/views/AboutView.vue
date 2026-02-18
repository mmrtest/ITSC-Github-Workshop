<script setup lang="ts">
import { RouterLink } from "vue-router";

const teamMembers = [
  {
    id: 1,
    name: "Team Member A",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years of experience in e-commerce.",
  },
  {
    id: 2,
    name: "Team Member B",
    role: "CTO",
    bio: "Tech enthusiast passionate about scalable architecture.",
  },
  {
    id: 3,
    name: "Team Member C",
    role: "Head of Design",
    bio: "Creative mind focused on delivering the best user experience.",
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation (reused) -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <RouterLink to="/" class="text-2xl font-bold text-indigo-600"
              >Commercia</RouterLink
            >
          </div>
          <div class="flex items-center space-x-4">
            <RouterLink
              to="/"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Home</RouterLink
            >
            <RouterLink
              to="/products"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >Products</RouterLink
            >
            <RouterLink
              to="/about"
              class="text-gray-900 font-semibold px-3 py-2 rounded-md text-sm font-medium"
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

    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-base font-semibold text-indigo-600 tracking-wide uppercase"
        >
          About Us
        </h2>
        <p
          class="mt-1 text-4xl font-extrabold text-red-600 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          Header Placeholder
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Commercia provides the tools and infrastructure you need to start,
          run, and grow your business online.
        </p>
      </div>

      <div class="mt-20">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p class="text-lg text-gray-500">
              To make commerce better for everyone, so businesses can focus on
              what they do best: building and selling their products.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p class="text-lg text-gray-500">
              A world where anyone can turn their idea into a business and
              achieve independence.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">Our Values</h3>
            <p class="text-lg text-gray-500">
              We value simple solutions, clear communication, and putting the
              customer first in everything we do.
            </p>
          </div>
        </div>
      </div>

      <!-- Team Section Placeholder -->
      <div class="mt-20">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-10">
          Meet Our Team
        </h3>
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="space-y-4 text-center"
          >
            <div
              class="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-red-600"
            >
              <svg
                class="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div class="space-y-2">
              <h4 class="text-lg leading-6 font-medium text-red-600">
                {{ member.name }}
              </h4>
              <p class="text-indigo-600">{{ member.role }}</p>
              <p class="text-gray-500">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center">
        <h3 class="text-2xl font-bold text-gray-900">Get in Touch</h3>
        <p class="mt-4 text-lg text-gray-500">
          Have questions? We'd love to hear from you.
        </p>
        <p class="mt-2 text-lg font-medium text-indigo-600">
          contact@commercia.inc
        </p>
      </div>
    </div>
  </div>
</template>
