import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Family } from '@/types/familly'

export const useFamilyStore = defineStore('family', () => {
  const family = ref<Family | null>(null)
  function setFamily(data: Family) {
    family.value = data
  }

  return {
    family,
    setFamily,
  }
})
