<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const skills = ref([]);

onMounted(async () => {
try { const response = await
axios.get('http://localhost:3000/api/skills'); skills.value =
response.data; } catch (error) { console.error(error); }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3
            class="text-xl font-bold text-gray-800">{{ skill.name}}
            </h3>
            <div class="flex justify-center items-center h-16 mb-4">
            <img
              v-if="skill.iconUrl"
              :src="skill.iconUrl"
              :alt="skill.name"
              class="max-w-[40px] h-auto object-contain"
            />
            </div>
              <p
              class="text-gray-500 mt-2">{{ skill.level }}
              </p>
          </div>
        </div>
    </div>
  </section>
</template>
