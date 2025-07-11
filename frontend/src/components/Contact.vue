<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
        <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>

          <a href="mailto:emailanda@example.com" class="bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-300 inline-block mb-12">
            Kirim Email
          </a>
        <div class="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/destadrns"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-sky-500 transition duration-300"
            aria-label="GitHub"
          >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.4-2.7 5.3-5.3 5.7.4.4.8 1 .8 2v3c0 .3.2.6.8.5A10.8 10.8 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/dstaasptra/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-sky-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5a2.5 2.5 0 11-.01 5.01A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7.5 0h3.6v1.6h.1a3.9 3.9 0 013.5-1.9c3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.7c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21h-4V9z"
            />
          </svg>
          </a>
        </div>

        <p class="text-gray-500">
          &copy; {{ new Date().getFullYear() }} Desta Adriyan Saputra
        </p>
      </div>
  </footer>
</template>
