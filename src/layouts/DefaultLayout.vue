<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/TopHeader.vue'
import Footer from '@/components/BotFooter.vue'
</script>
