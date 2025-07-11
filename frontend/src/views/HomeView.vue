<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
  <div>
    <Navbar />

    <!-- Ini target #profil -->
    <div id="profil"></div>

    <main>
      <Hero />

      <div id="pendidikan" v-animate-on-scroll>
        <Education />
      </div>

      <div id="skill" v-animate-on-scroll>
        <Skills />
      </div>

      <div id="proyek" v-animate-on-scroll>
        <Projects />
      </div>

      <div id="kontak" v-animate-on-scroll>
        <Contact />
      </div>
    </main>
  </div>
</template>
