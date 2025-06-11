<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <div
        class="flex flex-row items-center justify-between p-6 border-b-1 border-gray-300 min-h-[76px]"
      >
        <img alt="Alef logo" class="text-black" src="@/assets/logo.svg" width="93" height="29" />

        <nav class="grow flex flex-row items-center justify-center gap-[24px] text-gray-500">
          <RouterLink to="/"> Форма</RouterLink>
          <RouterLink to="/preview">Превью</RouterLink>
        </nav>
      </div>
    </header>

    <div class="p-6 flex flex-grow md:justify-center">
      <RouterView />
    </div>

    <footer>
      <div class="text-center p-6 border-t-1 border-gray-300 min-h-[76px] text-gray-500">
        all rights reserved
      </div>
    </footer>
  </div>
</template>
